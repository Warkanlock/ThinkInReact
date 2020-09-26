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
import ListOfItems from "../Home/Inicio/ListOfItems";

const RightPanel = (props) => {
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
                ¡Start learning right away!
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Visit
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
        <Divider />
        <ListOfItems></ListOfItems>
      </Box>
    </Paper>
  );
};

export default RightPanel;
