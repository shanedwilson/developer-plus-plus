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
// import podcastData from '../helpers/data/podcastData';
// import resourceData from '../helpers/data/resourceData';
// import tutorialData from '../helpers/data/tutorialData';


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
  }

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
        .then((userEvents) => {
          this.setState({ userEvents });
        })
        .catch(err => console.error('error with github user events GET', err));
    }
  }

  componentDidMount() {
    connection();

    const writeItems = () => {
      const uid = authRequests.getCurrentUid();
      const selectedView = this.state.view;
      itemData.getItemsData(uid, selectedView)
        .then((items) => {
          this.setState({ items });
        })
        .catch(err => console.error('error with items GET', err));
    };

    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const users = sessionStorage.getItem('githubUsername');
        writeItems();
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
        <div className="row">
          <Profile profile={this.state.profile}/>
          <div className="col-8">
            <Form />
            <Portal
            items={this.state.items}
            deleteSingleItem={this.deleteOne}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
