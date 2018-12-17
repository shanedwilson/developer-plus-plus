import React from 'react';

import './ResourceItem.scss';

class ResourceItem extends React.Component {
  render() {
    const { resource } = this.props;
    return (
      <h2>{resource.name}</h2>
    );
  }
}

export default ResourceItem;
