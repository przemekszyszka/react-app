import React from 'react';

class Story extends React.Component {
  propTypes: {
    story: React.PropTypes.any.isRequired
  }

  render() {
    return (
      <div>
        <a href={this.props.story.url}>{this.props.story.title}</a>
        <span>scrore: {this.props.story.score}</span>
      </div>
    );
  }
}

export default Story;
