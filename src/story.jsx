import React from 'react';
import {Badge} from 'react-bootstrap';

class Story extends React.Component {
  propTypes: {
    story: React.PropTypes.any.isRequired
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-8">
          <a href={this.props.story.url}>{this.props.story.title}</a>
        </div>
        <div className="col-sm-4 text-right">
          <p>scrore: <Badge>{this.props.story.score}</Badge></p>
        </div>
      </div>
    );
  }
}

export default Story;
