import React from 'react';
import PropTypes from 'prop-types';
import authRequests from '../../helpers/data/authRequests';
import './Auth.scss';

class Auth extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.func,
  }

  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate().then((res) => {
      const user = res.additionalUserInfo.username;
      const { accessToken } = res.credential;
      this.props.isAuthenticated(user, accessToken);
    }).catch(err => console.error('there was an error with auth', err));
  }

  render() {
    return (
      <div className="Auth">
        <button className="btn" onClick={this.authenticateUser}>
          <img className="login-img" src="https://help.dropsource.com/wp-content/uploads/sites/4/2017/02/gh-login-button.png" alt="github login"></img>
        </button>
      </div>
    );
  }
}

export default Auth;
