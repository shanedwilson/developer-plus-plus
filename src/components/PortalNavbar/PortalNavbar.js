import React from 'react';

import './PortalNavbar.scss';

class PortalNavbar extends React.Component {
  portalNavEvent = (e) => {
    e.preventDefault();
    e.target.classList.toggle('active');
    const selectedView = e.target.id;
    this.props.displayView(selectedView);
  };

  render() {
    return (
      <div className="nav-tabs">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button className="nav-link active" id="blogs" onClick={this.portalNavEvent}>Blogs</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" id="tutorials" onClick={this.portalNavEvent}>Tutorials</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" id="resources" onClick={this.portalNavEvent}>Resources</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" id="podcasts" onClick={this.portalNavEvent}>Podcasts</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default PortalNavbar;
