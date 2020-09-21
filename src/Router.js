import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import TopBar from "./Components/TopBar";
import MainNews from "./Components/Screen/MainNews";
import RecommendNews from "./Components/Screen/RecommendNews";
import Topics from "./Components/Screen/Topics";
import MyPage from "./Components/Screen/MyPage";

export default (props) => {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/" component={MainNews} />
        <Route path="/recommend" component={RecommendNews} />
        <Route path="/topics" component={Topics} />
        <Route path="/mypage" component={MyPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
