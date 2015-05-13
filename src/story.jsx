import React from 'react';

class Story extends React.Component {
  propTypes: {
    story: React.PropTypes.any.isRequired
  }

  render() {
    return (
      <div>
        <a href={this.props.story.url}>{this.props.story.title}</a>
      </div>
    );
  }
}

export default Story;
