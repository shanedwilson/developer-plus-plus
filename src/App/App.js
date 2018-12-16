import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import connection from '../helpers/data/connection';

import Auth from '../components/Auth/Auth';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import Profile from '../components/Profile/Profile';
import Form from '../components/Form/Form';
import Portal from '../components/Portal/Portal';

import blogData from '../helpers/data/blogData';
import podcastData from '../helpers/data/podcastData';


import './App.scss';
import authRequests from '../helpers/data/authRequests';
import githubData from '../helpers/data/githubData';

class App extends Component {
  state = {
    authed: false,
    profile: [],
    blogs: [],
  }

  componentDidMount() {
    connection();


    blogData.getBlogsData()
      .then((blogs) => {
        this.setState({ blogs });
      })
      .catch(err => console.error('error with blogs GET', err));

    podcastData.getPodcastsData()
      .then((podcasts) => {
        this.setState({ podcasts });
      })
      .catch(err => console.error('error with podcast GET', err));


    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      githubData.getUserEvents(user);
      githubData.getUser(user)
        .then((profile) => {
          this.setState({ profile });
        })
        .catch(err => console.error('error with github profile GET', err));
      if (user) {
        this.setState({
          authed: true,
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

  isAuthenticated = () => {
    this.setState({ authed: true });
  }

  render() {
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      this.setState({ authed: false });
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
            blogs={this.state.blogs}
            podcasts={this.state.podcasts}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
