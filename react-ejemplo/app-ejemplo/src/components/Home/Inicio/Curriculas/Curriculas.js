import React from "react";
import Curricula from "./Curricula";
import { crearCurriculas } from "../../../Shared/FakeData";

function Curriculas(props) {
  return (
    <>
      {crearCurriculas(3).map((curricula) => {
        return (
          <Curricula
            nombre={curricula.nombre}
            descripcion={curricula.descripcion}
          ></Curricula>
        );
      })}
    </>
  );
}

export default Curriculas;
