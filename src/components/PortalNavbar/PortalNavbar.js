import React from 'react';
import PropTypes from 'prop-types';

class PortalNavbar extends React.Component {
  static propTypes = {
    view: PropTypes.string,
  }

  portalNavEvent = (e) => {
    e.preventDefault();
    const view = e.target.id;
    this.props.displayView(view);
  };

  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button className="nav-link active" id="tutorials" onClick={this.portalNavEvent}>Tutorials</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" id="blogs" onClick={this.portalNavEvent}>Blogs</button>
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
