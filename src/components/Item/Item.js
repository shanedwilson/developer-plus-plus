import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import itemShape from '../../helpers/propz/itemShape';


import './Item.scss';

class Item extends React.Component {
  static propTypes = {
    item: itemShape,
    deleteSingleItem: PropTypes.func,
    updateOne: PropTypes.func,
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteSingleItem, item } = this.props;
    deleteSingleItem(item.id, item.type);
  }

  checkEvent = (e) => {
    e.preventDefault();
    const { updateOne, item } = this.props;
    const isDone = e.target.checked;
    const doneDate = moment().unix();
    updateOne(item.id, item.type, isDone, doneDate);
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
        <div className="checkbox-div ml-1">
          <input type="checkbox" checked={item.isDone} onChange={this.checkEvent} />
          <label className="checkbox-label ml-1">Done!</label>
        </div>
      </li>
    );
  }
}

export default Item;
