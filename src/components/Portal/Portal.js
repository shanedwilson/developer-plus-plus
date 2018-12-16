import PropTypes from 'prop-types';
import React from 'react';

import BlogItem from '../BlogItem/BlogItem';

import './Portal.scss';
import PodcastItem from '../PodcastItem/PodcastItem';

class Portal extends React.Component {
  render() {
    const { blogs } = this.props;
    const { podcasts } = this.props;
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

    return (
      <div className="portal">
        <h2>PORTAL</h2>
        {blogItemComponents}
        {podcastItemComponents}
      </div>
    );
  }
}

export default Portal;
