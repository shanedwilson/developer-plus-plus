import React from 'react';
import authRequests from '../../helpers/data/authRequests';
import './Auth.scss';

class Auth extends React.Component {
  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate().then(() => {
      // do something
    }).catch(err => console.error('there was an error with auth', err));
  }


  render() {
    return (
      <div className="Auth">
        <button className="btn btn-danger" onClick={this.authenticateUser}>
          <img src="https://help.dropsource.com/wp-content/uploads/sites/4/2017/02/gh-login-button.png" alt="github login"></img>
        </button>
      </div>
    );
  }
}

export default Auth;
