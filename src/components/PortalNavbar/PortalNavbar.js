import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import './PortalNavbar.scss';

class PortalNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 'blogs',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  portalNavEvent = (e) => {
    e.preventDefault();
    const selectedView = e.target.id;
    this.props.displayView(selectedView);
    this.toggle(selectedView);
  };

  render() {
    return (
      <div className="my-navbar nav-tabs">
        <Nav tabs color="light">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 'blogs' })}
              id="blogs"
              onClick={this.portalNavEvent}
            >
              Blogs
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 'tutorials' })}
              id="tutorials"
              onClick={this.portalNavEvent}
              >
              Tutorials
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 'resources' })}
              id="resources"
              onClick={this.portalNavEvent}
            >
              Resources
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 'podcasts' })}
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
