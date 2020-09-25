import React from "react";
import Curso from "./Curso";
import { crearCursos } from "../../Shared/FakeData";
import { Box } from "@material-ui/core";

function Cursos(props) {
  return (
    <div>
      {crearCursos(3).map((curso) => {
        return (
          <Box p={1}>
            <Curso key={curso.nombre} informacion={curso}></Curso>
          </Box>
        );
      })}
    </div>
  );
}

export default Cursos;
