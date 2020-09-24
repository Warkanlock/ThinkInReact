import React from "react";
import Curricula from "./Curricula";
import { crearCurriculas } from "../../../Shared/FakeData";

function Curriculas(props) {
  return (
    <div>
      {crearCurriculas(3).map((curricula) => {
        return (
          <Curricula
            nombre={curricula.nombre}
            descripcion={curricula.descripcion}
          ></Curricula>
        );
      })}
    </div>
  );
}

export default Curriculas;
