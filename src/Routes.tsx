import * as React from "react";
import { Route } from "react-router-dom";
import { PostRoutes, HomeRoutes } from "./pages";

export default () => (
  <React.Fragment>
    <Route exact path="/" component={HomeRoutes} />
    <Route path="/posts" component={PostRoutes} />
  </React.Fragment>
);
