import React from "react";
import Cursos from "../Home/Cursos/Cursos";
import Curriculas from "../Home/Inicio/Curriculas/Curriculas";
import { Switch, Route } from "react-router-dom";
import PerfilUsuario from "../Perfil/PerfilUsuario";

function MapRoutes(props) {
  return (
    <Switch>
      <Route exact path="/">
        <Curriculas></Curriculas>
      </Route>
      <Route exact path="/cursos">
        <Cursos></Cursos>
      </Route>
      <Route exact path="/perfil">
        <PerfilUsuario></PerfilUsuario>
      </Route>
    </Switch>
  );
}

export default MapRoutes;
