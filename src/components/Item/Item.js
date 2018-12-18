import React from 'react';

import './Item.scss';

class Item extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <h2>{item.name}</h2>
    );
  }
}

export default Item;
