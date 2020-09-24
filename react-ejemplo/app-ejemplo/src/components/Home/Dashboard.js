import React from "react";
import { crearCurriculas } from "../Shared/FakeData";
import PanelDerecho from "../Shared/PanelDerecho";
import Curricula from "./Curricula";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        <div className="container">
          <div className="row">
            <div className="col-10">
              {crearCurriculas(20).map((curricula) => {
                return (
                  <Curricula
                    nombre={curricula.nombre}
                    descripcion={curricula.descripcion}
                  ></Curricula>
                );
              })}
            </div>
            <div className="col-2">
              <PanelDerecho></PanelDerecho>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
