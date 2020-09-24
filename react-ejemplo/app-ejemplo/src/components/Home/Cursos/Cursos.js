import React from "react";
import Curso from "./Curso";
import { crearCursos } from "../../Shared/FakeData";

function Cursos(props) {
  return (
    <div>
      {crearCursos(6).map((curso) => {
        return <Curso informacion={curso}></Curso>;
      })}
    </div>
  );
}

export default Cursos;
