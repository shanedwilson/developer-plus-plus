import React from 'react';
import PropTypes from 'prop-types';

import itemShape from '../../helpers/propz/itemShape';


import './Item.scss';

class Item extends React.Component {
  static propTypes = {
    item: itemShape,
    deleteSingleItem: PropTypes.func,
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteSingleItem, item } = this.props;
    deleteSingleItem(item.id, item.type);
  }

  render() {
    const { item } = this.props;
    return (
      <li className="item text-center">
        <span className="col-7">{item.name}</span>
        <span className="col-3">{item.url}</span>
        <button className="btn btn-danger" onClick={this.deleteEvent}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </li>
    );
  }
}

export default Item;
