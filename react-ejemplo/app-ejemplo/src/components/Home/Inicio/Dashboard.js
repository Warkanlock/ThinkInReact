import React from "react";
import PanelDerecho from "../../Shared/PanelDerecho";
import Curriculas from "./Curriculas/Curriculas";
import { Switch, Route } from "react-router-dom";
import Cursos from "../Cursos/Cursos";
import { Grid } from "@material-ui/core";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        <Grid container>
          <Grid item xs={6}>
            <Grid container justify="center">
              <Grid>
                <Switch>
                  <Route exact path="/">
                    <Curriculas></Curriculas>
                  </Route>
                  <Route exact path="/cursos">
                    <Cursos></Cursos>
                  </Route>
                </Switch>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container justify="center">
              <PanelDerecho></PanelDerecho>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Dashboard;
