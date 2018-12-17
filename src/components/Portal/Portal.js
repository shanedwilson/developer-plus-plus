// import PropTypes from 'prop-types';
import React from 'react';

import BlogItem from '../BlogItem/BlogItem';
import PodcastItem from '../PodcastItem/PodcastItem';
import ResourceItem from '../ResourceItem/ResourceItem';
import TutorialItem from '../TutorialItem/TutorialItem';


import './Portal.scss';

class Portal extends React.Component {
  render() {
    const { blogs } = this.props;
    const { podcasts } = this.props;
    const { resources } = this.props;
    const { tutorials } = this.props;

    const blogItemComponents = blogs.map(blog => (
      <BlogItem
        blog={blog}
        key={blog.id}
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
      <div className="portal">
        <h2>PORTAL</h2>
        {blogItemComponents}
        {podcastItemComponents}
        {resourceItemComponents}
        {tutorialItemComponents}
      </div>
    );
  }
}

export default Portal;
