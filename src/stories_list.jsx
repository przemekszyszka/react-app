import React from 'react'
import Story from './story'
import jquery from 'jquery';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

class StoriesList extends React.Component {
  propTypes: {
    endpoint: React.PropTypes.String.isRequired
  }

  componentDidMount() {
    jquery.get("https://fierce-gorge-1132.herokuapp.com/" + this.props.endpoint, function(stories) {
      this.setState({stories: stories});
    }.bind(this));
  }

  render() {
    return (
      <ListGroup>
        {this._renderStories(this.props.stories)}
      </ListGroup>
    );
  }

  _renderStories(stories) {
    if (this.state) {
      return (this.state.stories.map(story =>
        <ListGroupItem key={story.id}>
          <Story story={story}></Story>
        </ListGroupItem>
      ));
    }
  }
}

export default StoriesList;
