import React from 'react';
import StoriesList from './stories_list';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <p> Hello, world! </p>
        <div>Stories:</div>
        <StoriesList />
      </div>
    );
  }
}

export default HelloWorld;
