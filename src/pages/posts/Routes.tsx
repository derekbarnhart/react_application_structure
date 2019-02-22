import * as React from "react";
import { Route, Switch } from "react-router-dom";

import PostDetailContainer from "./containers/PostDetailContainer";
import PostsHomeContainer from "./containers/PostsHomeContainer";

const Test = ({ match: { params } }) => (
  <div>hello test{JSON.stringify(params)}</div>
);

const PostsContainer = ({ match, ...props }) => {
  return (
    <Switch>
      // Detail page
      <Route exact path={`${match.url}/:id`} component={PostDetailContainer} />
      // Home page for posts
      <Route component={PostsHomeContainer} />
    </Switch>
  );
};

export default PostsContainer;
