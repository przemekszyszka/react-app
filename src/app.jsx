import React from 'react';
import Menu from './menu';
import Router from "react-router";
import PopularStories from './popular_stories';
import RecentStories from './recent_stories';
import {Route, DefaultRoute} from "react-router";

var routes = (
  <Route handler={Menu}>
    <DefaultRoute handler={PopularStories} />
    <Route name="popular" path="/popular" handler={PopularStories} />
    <Route name="recent" path="/recent" handler={RecentStories} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById("app"));
});
