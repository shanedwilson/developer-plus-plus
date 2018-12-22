import React from 'react';
import './Profile.scss';

class Profile extends React.Component {
  render() {
    const { profile, commitCount } = this.props;
    return (
      <div className="profile col-3 mt-5">
        <div className="card">
          <img className="img-fluid" src={profile.avatar_url} alt="github pic"></img>
          <h2 className="card-title">{profile.login}</h2>
          <p className="card-text">{profile.bio}</p>
          <a href={profile.html_url} className="_blank">github.com/shanedwilson</a>
          <h1>{commitCount}</h1>
          <p>commits</p>
          <p>in the last 5 days</p>
        </div>
      </div>
    );
  }
}

export default Profile;
