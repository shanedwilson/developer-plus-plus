import React from 'react';

import './BlogItem.scss';

class BlogItem extends React.Component {
  render() {
    const { blog } = this.props;
    return (
      <h2>{blog.name}</h2>
    );
  }
}

export default BlogItem;
