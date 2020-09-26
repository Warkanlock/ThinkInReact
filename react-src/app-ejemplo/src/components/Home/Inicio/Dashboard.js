import React from "react";
import PanelDerecho from "../../Shared/PanelDerecho";
import { Box, Grid } from "@material-ui/core";
import MapRoutes from "../../Shared/MapRoutes";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Box width={1} m={2}>
              <Grid container justify="center">
                <Grid item xs={12}>
                  <MapRoutes></MapRoutes>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Grid container justify="center">
              <Grid item xs={12}>
                <PanelDerecho></PanelDerecho>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Dashboard;
