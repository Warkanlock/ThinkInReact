import React from "react";
import "./App.css";
import Navegacion from "./components/Shared/Navegacion";
import Dashboard from "./components/Home/Inicio/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="Aplicacion">
        <Navegacion></Navegacion>
        <Dashboard></Dashboard>
      </div>
    </Router>
  );
}

export default App;
