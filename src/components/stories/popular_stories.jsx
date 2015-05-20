import React from 'react';
import StoriesList from './stories_list/stories_list';

class PopularStories extends React.Component {
  render() {
    return (
      <StoriesList endpoint='/stories' />
    );
  }
}

export default PopularStories
