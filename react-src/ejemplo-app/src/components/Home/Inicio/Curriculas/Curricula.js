import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../../../Shared/useStyles";

const Curricula = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.nombre}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.descripcion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Investigar</Button>
      </CardActions>
    </Card>
  );
};

export default Curricula;
