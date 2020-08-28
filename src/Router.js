import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import MainNews from "./Components/Screen/MainNews";
import RecommendNews from "./Components/Screen/RecommendNews";
import Categories from "./Components/Screen/Categories";
import Nav from "./Components/Nav";

export default () => {
  const [category, setCategory] = useState("추천 뉴스");

  useEffect(() => console.log(category), [category]);

  return (
    <Router>
      <Nav setCategory={setCategory} />
      <Switch>
        <Route exact path="/" component={MainNews} />
        <Route path="/recommend" component={RecommendNews} />
        <Route path="/categories" component={Categories} />

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
