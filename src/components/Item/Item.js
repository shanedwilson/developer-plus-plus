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
      <li className="item">
        <span className="col-5">{item.name}</span>
        <span className="col-5">{item.url}</span>
        <button className="btn btn-danger" onClick={this.deleteEvent}>
          <i className="fas fa-trash-alt" />
        </button>
        <div className="custom-control custom-checkbox ml-1">
          <input type="checkbox" className="custom-control-input" id="customCheck1" />
          <label className="custom-control-label" htmlFor="customCheck1">Done!</label>
        </div>
      </li>
    );
  }
}

export default Item;
