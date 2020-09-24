import React from "react";

const Curricula = (props) => {
  return (
    <>
      <div className="card card-item-curricula">
        <div className="card-body">
          <h5 className="card-title text-center">
            {props.nombre.toLowerCase()}
          </h5>
          <p className="card-text text-center">{props.descripcion}</p>
          <a href="#" className="btn btn-primary btn-lg btn-block">
            Ir
          </a>
        </div>
      </div>
    </>
  );
};

export default Curricula;
