import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../../Shared/useStyles";

const Course = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.courseRoot} variant="outlined">
      <CardContent>
        <Typography
          className={classes.courseTitle}
          color="textSecondary"
          gutterBottom
        >
          {props.information.name}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.information.description}
        </Typography>
        <Typography variant="h6" component="h2">
          Lecture by {props.information.by} with a total of{" "}
          {props.information.users} enroll students
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">Enroll</Button>
      </CardActions>
    </Card>
  );
};

export default Course;
