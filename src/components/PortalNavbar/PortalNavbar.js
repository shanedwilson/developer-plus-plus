import React from 'react';

class PortalNavbar extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active">Turotials</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >Blogs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Resources</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Podcasts</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default PortalNavbar;
