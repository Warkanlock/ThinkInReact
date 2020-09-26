import React from "react";
import "./App.css";
import Navbar from "./components/Shared/Navbar";
import Dashboard from "./components/Home/Inicio/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";
import { Box } from "@material-ui/core";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Box marginTop="2rem">
        <Dashboard></Dashboard>
      </Box>
    </Router>
  );
}

export default App;
