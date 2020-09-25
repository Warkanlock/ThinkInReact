import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Box, Paper } from "@material-ui/core";
import faker from "faker";
import { useStyles } from "./useStyles";
import ListaItems from "../Home/Inicio/ListaItems";

const PanelDerecho = (props) => {
  const classes = useStyles();
  return (
    <Paper variant="outlined" className="columna-derecha-sticky">
      <Box m={2}>
        <Card variant="outlined" className={classes.cardList}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={faker.image.people()}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                ¡Empieza a estudiar ya!
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                No dejes de aprender, busca las curriculas de las escuelas
                cercanas a vos
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Visitar
            </Button>
            <Button size="small" color="primary">
              Aprender Mas
            </Button>
          </CardActions>
        </Card>
        <Divider />
        <ListaItems></ListaItems>
      </Box>
    </Paper>
  );
};

export default PanelDerecho;
