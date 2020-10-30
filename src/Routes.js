import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Aboutme from "./Aboutme";
import Explore from "./Explore";
import LogoComponent from "./logoComponent";
import Newhome from "./Newhome";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Newhome} />
        <Route path="/explore" exact component={Explore} />
        <Route path="/aboutme" exact component={Aboutme} />
        <Route path="/explore/logo/:logo_id" exact component={LogoComponent} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
