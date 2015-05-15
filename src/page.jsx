import React from 'react';
import StoriesList from './stories_list';

class Page extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1">
          <h3><b>Stories:</b></h3>
          <StoriesList />
        </div>
      </div>
    );
  }
}

export default Page;
