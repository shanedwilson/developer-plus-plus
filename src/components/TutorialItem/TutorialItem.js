import React from 'react';

import './TutorialItem.scss';

class TutorialItem extends React.Component {
  render() {
    const { tutorial } = this.props;
    return (
      <h2>{tutorial.name}</h2>
    );
  }
}

export default TutorialItem;
