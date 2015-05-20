import React from 'react';
import StoriesList from './stories_list/stories_list';

class RecentStories extends React.Component {
  render() {
    return (
      <StoriesList endpoint='/stories/recent' />
    );
  }
}

export default RecentStories
