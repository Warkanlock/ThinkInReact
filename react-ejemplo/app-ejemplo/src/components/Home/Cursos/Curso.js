import React from "react";

const Curso = (props) => {
  return (
    <div class="division-curriculas">
      <div class="jumbotron">
        <h1 class="display-4">{props.informacion.nombre}</h1>
        <p class="lead">{props.informacion.descripcion}</p>
        <hr class="my-4" />
        <p>
          Dictado por {props.informacion.otorga} con un total de{" "}
          {props.informacion.usuarios} alumnos
        </p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">
            Cursar
          </a>
        </p>
      </div>
    </div>
  );
};

export default Curso;
