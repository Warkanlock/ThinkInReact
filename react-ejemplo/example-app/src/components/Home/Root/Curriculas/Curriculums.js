import React from "react";
import Curriculum from "./Curricula";
import { createCurriculums } from "../../../Shared/FakeData";
import { Box } from "@material-ui/core";

function Curriculums(props) {
  return (
    <>
      {createCurriculums(3).map((curriculum) => {
        return (
          <Box p={1}>
            <Curriculum
              key={curriculum.nombre}
              name={curriculum.nombre}
              description={curriculum.descripcion}
            ></Curriculum>
          </Box>
        );
      })}
    </>
  );
}

export default Curriculums;
