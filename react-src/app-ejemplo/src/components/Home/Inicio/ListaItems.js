import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useStyles } from "../../Shared/useStyles";

function ListaItems(props) {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button component="a" href="/perfil">
          <ListItemText primary="Perfil" color="primary" />
        </ListItem>
        <ListItem button component="a" href="/cursos">
          <ListItemText primary="Mis cursos"></ListItemText>
        </ListItem>
      </List>
    </div>
  );
}

export default ListaItems;
