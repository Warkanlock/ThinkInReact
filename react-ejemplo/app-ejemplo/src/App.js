import React from "react";
import "./App.css";
import Navegacion from "./components/Shared/Navegacion";
import Dashboard from "./components/Home/Dashboard";

function App() {
  return (
    <>
      <div className="Aplicacion">
        <Navegacion></Navegacion>
        <Dashboard></Dashboard>
      </div>
    </>
  );
}

export default App;
