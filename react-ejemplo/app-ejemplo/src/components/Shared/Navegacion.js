import React from "react";
import Encabezado from "./Encabezado";

const Navegacion = () => {
  return (
    <>
      <header>
        <div className="container-encabezado">
          <Encabezado></Encabezado>
          <ul>
            <li>
              <a href="/inicio">Inicio</a>
            </li>
            <li>
              <a href="/cursos">Cursos</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navegacion;
