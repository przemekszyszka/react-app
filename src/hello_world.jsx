import React from 'react';
import StoriesList from './stories_list'

class HelloWorld extends React.Component {
  render() {
    var stories=[{ id: "1", title: "XXX", url: "http://www.google.com" }, { id: "2", title: "XXX", url: "http://www.google.com" }]

    return (
      <div>
        <p> Hello, world! </p>
        <div>Stories:</div>
        <StoriesList stories={stories} />
      </div>
    );
  }
}

export default HelloWorld;
