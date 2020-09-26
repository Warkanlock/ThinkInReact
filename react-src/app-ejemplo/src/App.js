import React from "react";
import "./App.css";
import Navegacion from "./components/Shared/Navegacion";
import Dashboard from "./components/Home/Inicio/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";
import { Box } from "@material-ui/core";

function App() {
  return (
    <Router>
      <Navegacion></Navegacion>
      <Box marginTop="2rem">
        <Dashboard></Dashboard>
      </Box>
    </Router>
  );
}

export default App;
