// import PropTypes from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';
import itemShape from '../../helpers/propz/itemShape';

import Item from '../Item/Item';
import PodcastItem from '../PodcastItem/PodcastItem';
import ResourceItem from '../ResourceItem/ResourceItem';
import TutorialItem from '../TutorialItem/TutorialItem';
import PortalNavbar from '../PortalNavbar/PortalNavbar';


import './Portal.scss';

class Portal extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(itemShape),
  }

  render() {
    const { items } = this.props;
    const { podcasts } = this.props;
    const { resources } = this.props;
    const { tutorials } = this.props;

    const itemComponents = items.map(item => (
      <Item
        item={item}
        key={item.id}
      />
    ));

    const podcastItemComponents = podcasts.map(podcast => (
      <PodcastItem
        podcast={podcast}
        key={podcast.id}
      />
    ));

    const resourceItemComponents = resources.map(resource => (
    <ResourceItem
      resource={resource}
      key={resource.id}
    />
    ));

    const tutorialItemComponents = tutorials.map(tutorial => (
      <TutorialItem
        tutorial={tutorial}
        key={tutorial.id}
      />
    ));

    return (
      <div className="portal mx-auto mt-5">
        <PortalNavbar />
        {itemComponents}
        {podcastItemComponents}
        {resourceItemComponents}
        {tutorialItemComponents}
      </div>
    );
  }
}

export default Portal;
