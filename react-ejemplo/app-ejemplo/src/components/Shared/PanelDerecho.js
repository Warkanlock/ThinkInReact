import React from "react";
import { Link } from "react-router-dom";

const PanelDerecho = (props) => {
  return (
    <div>
      <div className="columna-derecha-sticky">
        <div className="card card-item-curricula">
          <div className="card-body">
            <h5 className="card-title text-center">Panel de Usuario</h5>
            <p className="card-text text-center">
              Ingrese a su perfil de usuario
            </p>
            <Link
              to="/perfil"
              className="btn btn-primary btn-success btn-lg btn-block"
            >
              Ir
            </Link>
          </div>
        </div>
        <div className="card card-item-curricula">
          <div className="card-body">
            <h5 className="card-title text-center">Curricula</h5>
            <p className="card-text text-center">
              Explore las curriculas actualizadas
            </p>
            <Link to="/cursos" className="btn btn-secondary btn-lg btn-block">
              Buscar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelDerecho;
