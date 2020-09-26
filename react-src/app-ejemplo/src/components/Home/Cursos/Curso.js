import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../../Shared/useStyles";

const Curso = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.cursoRoot} variant="outlined">
      <CardContent>
        <Typography
          className={classes.cursoTitle}
          color="textSecondary"
          gutterBottom
        >
          {props.informacion.nombre}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.informacion.descripcion}
        </Typography>
        <Typography variant="h6" component="h2">
          Dictado por {props.informacion.otorga} con un total de{" "}
          {props.informacion.usuarios} alumnos
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">Cursar</Button>
      </CardActions>
    </Card>
  );
};

export default Curso;
