import * as React from "react";
import { Route, Switch } from "react-router-dom";

import HomeContainer from "./containers/HomeContainer";

const HomeRoutes = ({ match, ...props }) => {
  return (
    <Switch>
      <Route component={HomeContainer} />
    </Switch>
  );
};

export default HomeRoutes;
