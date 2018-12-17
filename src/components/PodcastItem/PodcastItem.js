import React from 'react';

import './PodcastItem.scss';

class PodcastItem extends React.Component {
  render() {
    const { podcast } = this.props;
    return (
      <h2>{podcast.name}</h2>
    );
  }
}

export default PodcastItem;
