import React from 'react';

import itemShape from '../../helpers/propz/itemShape';


import './Item.scss';

class Item extends React.Component {
  static propTypes = {
    item: itemShape,
  }

  render() {
    const { item } = this.props;
    return (
      <li className="item text-center">
        <span className="col-7">{item.name}</span>
        <span className="col-3">{item.url}</span>
      </li>
    );
  }
}

export default Item;
