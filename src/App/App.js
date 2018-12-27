import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import connection from '../helpers/data/connection';

import Auth from '../components/Auth/Auth';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import Profile from '../components/Profile/Profile';
import Form from '../components/Form/Form';
import Portal from '../components/Portal/Portal';

import itemData from '../helpers/data/itemData';

import './App.scss';
import authRequests from '../helpers/data/authRequests';
import githubData from '../helpers/data/githubData';

class App extends Component {
  state = {
    authed: false,
    profile: [],
    items: [],
    github_username: '',
    view: 'blogs',
    commitCount: 0,
  }

  displayView = (clickedView) => {
    const uid = authRequests.getCurrentUid();
    itemData.getItemsData(uid, clickedView)
      .then((items, selectedView) => {
        this.setState({ items, view: selectedView });
      });
  };

  componentDidUpdate() {
    if (this.state.github_username && this.state.profile.length === 0) {
      githubData.getUser(this.state.github_username)
        .then((profile) => {
          this.setState({ profile });
        })
        .catch(err => console.error('error with github user GET', err));
    }
    if (this.state.github_username && this.state.profile.length === 0) {
      githubData.getUserEvents(this.state.github_username)
        .then((commitCount) => {
          this.setState({ commitCount });
        })
        .catch(err => console.error('error with github user events GET', err));
    }
  }

  componentDidMount() {
    connection();

    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const users = sessionStorage.getItem('github_username');
        this.displayView(this.state.view);
        this.setState({
          authed: true,
          github_username: users,
        });
      } else {
        this.setState({
          authed: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  isAuthenticated = (username) => {
    this.setState({ authed: true, github_username: username });
    sessionStorage.setItem('github_username', username);
  }

  deleteOne = (itemId, itemType) => {
    const uid = authRequests.getCurrentUid();
    itemData.deleteItem(itemId, itemType)
      .then(() => {
        itemData.getItemsData(uid, itemType)
          .then((items) => {
            this.setState({ items });
          });
      })
      .catch(err => console.error('error with delete single', err));
  }

  updateOne = (itemId, itemType, isDone, doneDate) => {
    const uid = authRequests.getCurrentUid();
    itemData.updateIsDone(itemId, itemType, isDone, doneDate)
      .then(() => {
        itemData.getItemsData(uid, itemType)
          .then((items) => {
            this.setState({ items });
          });
      })
      .catch(err => console.error('error with delete single', err));
  }

  formSubmitEvent = (newItem, itemType) => {
    const uid = authRequests.getCurrentUid();
    itemData.postItem(newItem, itemType)
      .then(() => {
        itemData.getItemsData(uid, itemType)
          .then((items) => {
            this.setState({ items });
          });
      }).catch((err) => {
        console.error('error with items post', err);
      });
  }


  render() {
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      this.setState({ authed: false, github_username: '' });
    };

    if (!this.state.authed) {
      return (
       <div className="App">
        <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
        <div className="row">
          <Auth isAuthenticated={this.isAuthenticated}/>
        </div>
      </div>
      );
    }
    return (
      <div className="App">
        <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
        <div className="row justify-content-around">
          <Profile
          profile={this.state.profile}
          commitCount={this.state.commitCount}
          />
          <div className="col-8">
            <Form onSubmit={this.formSubmitEvent} />
            <Portal
            items={this.state.items}
            deleteSingleItem={this.deleteOne}
            displayView={this.displayView}
            updateOne={this.updateOne}
            view={this.view}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
