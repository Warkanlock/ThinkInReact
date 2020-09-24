import React from "react";
import Encabezado from "./Encabezado";
import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <>
      <header>
        <div className="container-encabezado">
          <Encabezado></Encabezado>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/cursos">Cursos</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navegacion;
