import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStyles } from "./useStyles";

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.navbarRoot}>
      <AppBar position="fixed" color="primary">
        <Toolbar className={classes.navbarCustomize}>
          <Typography variant="h6" className={classes.navbarTitle}>
            Free Education for Everyone
          </Typography>
          <Button href="/" color="inherit">
            CURRICULUMS
          </Button>
          <Button href="/cursos" color="inherit">
            COURSES
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
