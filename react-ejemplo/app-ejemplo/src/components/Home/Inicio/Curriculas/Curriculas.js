import React from "react";
import Curricula from "./Curricula";
import { crearCurriculas } from "../../../Shared/FakeData";
import { Box } from "@material-ui/core";

function Curriculas(props) {
  return (
    <>
      {crearCurriculas(3).map((curricula) => {
        return (
          <Box p={1}>
            <Curricula
              key={curricula.nombre}
              nombre={curricula.nombre}
              descripcion={curricula.descripcion}
            ></Curricula>
          </Box>
        );
      })}
    </>
  );
}

export default Curriculas;
