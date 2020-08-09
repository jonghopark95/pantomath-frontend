import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import MainNews from "./Screen/MainNews";
import RecommendNews from "./Screen/RecommendNews";

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainNews} />
        <Route exact path="/recommend" component={RecommendNews} />
        {/* <Route exact path="/categories/politics" component={} />
        <Route exact path="/categories/economics" component={} />
        <Route exact path="/categories/society" component={} />
        <Route exact path="/categories/culture" component={} />
        <Route exact path="/categories/international" component={} />
        <Route exact path="/categories/district" component={} />
        <Route exact path="/categories/sports" component={} />
        <Route exact path="/categories/it-science" component={} /> */}
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
