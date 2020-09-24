import React from "react";
import PanelDerecho from "../../Shared/PanelDerecho";
import Curriculas from "./Curriculas/Curriculas";
import { Switch, Route } from "react-router-dom";
import Cursos from "../Cursos/Cursos";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        <div className="container">
          <div className="row">
            <div className="col-10">
              <Switch>
                <Route exact path="/">
                  <Curriculas></Curriculas>
                </Route>
                <Route exact path="/cursos">
                  <Cursos></Cursos>
                </Route>
              </Switch>
            </div>
            <div className="col-2">
              <PanelDerecho></PanelDerecho>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
