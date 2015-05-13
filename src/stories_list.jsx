import React from 'react'
import Story from './story'

class StoriesList extends React.Component {
  propTypes: {
    stories: React.proptypes.any.required;
  }

  render() {
    return (
      <div>
        {this._renderStories(this.props.stories)}
      </div>
    );
  }

  _renderStories(stories) {
    if (stories) {
      return (stories.map(story =>
        <Story key={story.id} story={story} />
      ));
    }
  }
}

export default StoriesList;
