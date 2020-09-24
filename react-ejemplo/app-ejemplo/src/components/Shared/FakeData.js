import faker from "faker";

faker.locale = "es";

const crearCurricula = () => {
  return {
    nombre: faker.lorem.word(),
    descripcion: faker.lorem.sentence(),
  };
};

export const crearCurriculas = (cantidadCurriculas) => {
  return new Array(cantidadCurriculas).fill(null).map(crearCurricula);
};
