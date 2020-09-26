import React from "react";
import Courses from "../Home/Courses/Courses";
import Curriculums from "../Home/Inicio/Curriculums/Curriculums";
import { Switch, Route } from "react-router-dom";
import UserProfile from "../Profile/UserProfile";

function MapRoutes(props) {
  return (
    <Switch>
      <Route exact path="/">
        <Curriculums></Curriculums>
      </Route>
      <Route exact path="/courses">
        <Courses></Courses>
      </Route>
      <Route exact path="/profile">
        <UserProfile></UserProfile>
      </Route>
    </Switch>
  );
}

export default MapRoutes;
