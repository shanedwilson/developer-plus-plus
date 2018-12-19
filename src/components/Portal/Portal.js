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
  }

  render() {
    const { items, deleteSingleItem } = this.props;

    const itemComponents = items.map(item => (
      <Item
        item={item}
        key={item.id}
        deleteSingleItem={deleteSingleItem}
      />
    ));

    return (
      <div className="portal mx-auto mt-5">
        <PortalNavbar />
        <ul>{itemComponents}</ul>
      </div>
    );
  }
}

export default Portal;
