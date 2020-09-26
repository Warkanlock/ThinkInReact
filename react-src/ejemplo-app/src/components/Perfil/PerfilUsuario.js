import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Avatar, Box } from "@material-ui/core";
import faker from "faker";

export default function PerfilUsuario() {
  const classes = useState();

  return (
    <Box p={1}>
      <Card variant="outlined" className={classes.perfilRoot}>
        <CardContent className={classes.perfilContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {faker.internet.userName()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {faker.internet.email()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {faker.internet.ip()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {faker.internet.mac()}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            EDITAR
          </Button>
          <Button size="small" color="primary">
            COMPARTIR
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
