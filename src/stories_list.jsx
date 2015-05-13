import React from 'react'
import Story from './story'
import jquery from 'jquery';

class StoriesList extends React.Component {
  componentDidMount() {
    jquery.get("https://fierce-gorge-1132.herokuapp.com/stories", function(stories) {
      this.setState({stories: stories});
    }.bind(this));
  }

  render() {
    return (
      <div>
        {this._renderStories(this.props.stories)}
      </div>
    );
  }

  _renderStories(stories) {
    if (this.state) {
      return (this.state.stories.map(story =>
        <Story key={story.id} story={story} />
      ));
    }
  }
}

export default StoriesList;
