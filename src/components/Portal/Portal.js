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
    updateOne: PropTypes.func,
    displayView: PropTypes.func,
    isDone: PropTypes.bool,
    changeTab: PropTypes.func,
    activeTab: PropTypes.string,
  }

  render() {
    const {
      items,
      deleteSingleItem,
      updateOne,
      displayView,
      isDone,
      view,
      changeTab,
      activeTab,
    } = this.props;

    const itemComponents = items.map(item => (
      <Item
        item={item}
        key={item.id}
        deleteSingleItem={deleteSingleItem}
        isDone={isDone}
        updateOne={updateOne}
      />
    ));

    return (
      <div className="portal mt-5">
        <PortalNavbar
          displayView={displayView}
          view={view}
          activeTab={activeTab}
          changeTab={changeTab}
          />
        <div className="item-div">
          <ul className="mt-2">{itemComponents}</ul>
        </div>
      </div>
    );
  }
}

export default Portal;
