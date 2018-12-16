import PropTypes from 'prop-types';
import React from 'react';

import BlogItem from '../BlogItem/BlogItem';

import './Portal.scss';

class Portal extends React.Component {
  render() {
    const { blogs } = this.props;
    const blogItemComponents = blogs.map(blog => (
      <BlogItem
        blog={blog}
        key={blog.id}
      />
    ));

    return (
      <div className="portal">
        <h2>PORTAL</h2>
        {blogItemComponents}
      </div>
    );
  }
}

export default Portal;
