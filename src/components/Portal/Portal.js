import React from 'react';
import PropTypes from 'prop-types';
import itemShape from '../../helpers/propz/itemShape';

import Item from '../Item/Item';
import PortalNavbar from '../PortalNavbar/PortalNavbar';


import './Portal.scss';

class Portal extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(itemShape),
    deleteSingleItem: PropTypes.func,
    displayView: PropTypes.func,
  }

  render() {
    const { items, deleteSingleItem, displayView } = this.props;

    const itemComponents = items.map(item => (
      <Item
        item={item}
        key={item.id}
        deleteSingleItem={deleteSingleItem}
      />
    ));

    return (
      <div className="portal mt-5">
        <PortalNavbar displayView={displayView}/>
        <div className="item-div">
          <ul className="mt-2">{itemComponents}</ul>
        </div>
      </div>
    );
  }
}

export default Portal;
