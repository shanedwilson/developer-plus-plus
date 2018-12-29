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
    githubToken: '',
    view: 'blogs',
    commitCount: 0,
    activeTab: 'blogs',
  }

  displayView = (clickedView) => {
    const uid = authRequests.getCurrentUid();
    itemData.getItemsData(uid, clickedView)
      .then((items, selectedView) => {
        this.setState({ items, view: selectedView });
      });
  };

    getGithubData = (users, gitHubTokenStorage) => {
      githubData.getUser(gitHubTokenStorage)
        .then((profile) => {
          this.setState({ profile });
        });
      githubData.getUserEvents(users, gitHubTokenStorage)
        .then((commitCount) => {
          this.setState({ commitCount });
        })
        .catch(err => console.error('error with github user events GET', err));
    }


    componentDidMount() {
      connection();

      this.removeListener = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const users = sessionStorage.getItem('github_username');
          const gitHubTokenStorage = sessionStorage.getItem('githubToken');
          this.displayView(this.state.view);
          this.getGithubData(users, gitHubTokenStorage);
          this.setState({
            authed: true,
            github_username: users,
            githubToken: gitHubTokenStorage,
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

  isAuthenticated = (username, accessToken) => {
    this.setState({ authed: true, github_username: username, githubToken: accessToken });
    sessionStorage.setItem('github_username', username);
    sessionStorage.setItem('githubToken', accessToken);
  }

  changeTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
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

  updateOne = (itemId, itemType, isDone) => {
    const uid = authRequests.getCurrentUid();
    itemData.updateIsDone(itemId, itemType, isDone)
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
            this.setState({ activeTab: itemType });
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
            changeTab={this.changeTab}
            activeTab={this.state.activeTab}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
