import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import MainNews from "./Components/Screen/MainNews";
import RecommendNews from "./Components/Screen/RecommendNews";
import Topics from "./Components/Screen/Topics";
import TopBar from "./Components/TopBar";
import Nav from "./Components/Nav";

export default () => {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/" component={MainNews} />
        <Route path="/recommend" component={RecommendNews} />
        <Route path="/topics" component={Topics} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
