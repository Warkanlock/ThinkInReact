import React from "react";
import Curriculum from "./Curriculum";
import { createCurriculums } from "../../../Shared/FakeData";
import { Box } from "@material-ui/core";

function Curriculums(props) {
  return (
    <>
      {createCurriculums(3).map((curriculum) => {
        return (
          <Box p={1}>
            <Curriculum
              key={curriculum.name}
              name={curriculum.name}
              description={curriculum.description}
            ></Curriculum>
          </Box>
        );
      })}
    </>
  );
}

export default Curriculums;
