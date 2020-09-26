import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStyles } from "./useStyles";

const Navegacion = () => {
  const classes = useStyles();

  return (
    <div className={classes.navegacionRoot}>
      <AppBar position="fixed" color="primary">
        <Toolbar className={classes.navegacionCustomize}>
          <Typography variant="h6" className={classes.navegacionTitle}>
            Educacion Libre
          </Typography>
          <Button href="/" color="inherit">
            INICIO
          </Button>
          <Button href="/cursos" color="inherit">
            CURSOS
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navegacion;
