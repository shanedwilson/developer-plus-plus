import React from 'react';

import authRequests from '../../helpers/data/authRequests';
import itemData from '../../helpers/data/itemData';

class PortalNavbar extends React.Component {
  portalNavEvent = (e) => {
    e.preventDefault();
    const uid = authRequests.getCurrentUid();
    const itemType = e.target.id;
    itemData.getItemsData(uid, itemType)
      .then((items) => {
        this.setState({ items });
      });
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
