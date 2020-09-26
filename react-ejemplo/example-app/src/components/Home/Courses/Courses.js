import React from "react";
import Course from "./Course";
import { createCourses } from "../../Shared/FakeData";
import { Box } from "@material-ui/core";

function Courses(props) {
  return (
    <div>
      {createCourses(3).map((course) => {
        return (
          <Box p={1}>
            <Course key={course.name} information={course}></Course>
          </Box>
        );
      })}
    </div>
  );
}

export default Courses;
