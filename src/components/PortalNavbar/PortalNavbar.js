import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import './PortalNavbar.scss';

class PortalNavbar extends React.Component {
  portalNavEvent = (e) => {
    e.preventDefault();
    const selectedView = e.target.id;
    this.props.displayView(selectedView);
    this.props.changeTab(selectedView);
  };

  render() {
    return (
      <div className="my-navbar nav-tabs">
        <Nav tabs color="light" className={'top'}>
          <NavItem>
            <NavLink
              className={classnames({ active: this.props.activeTab === 'blogs' })}
              id="blogs"
              onClick={this.portalNavEvent}
            >
              Blogs
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.props.activeTab === 'tutorials' })}
              id="tutorials"
              onClick={this.portalNavEvent}
              >
              Tutorials
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.props.activeTab === 'resources' })}
              id="resources"
              onClick={this.portalNavEvent}
            >
              Resources
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.props.activeTab === 'podcasts' })}
              id="podcasts"
              onClick={this.portalNavEvent}
            >
              Podcasts
            </NavLink>
          </NavItem>
        </Nav>
        </div>
    );
  }
}

export default PortalNavbar;
