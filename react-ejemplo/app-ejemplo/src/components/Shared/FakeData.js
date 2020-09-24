import faker from "faker";

faker.locale = "es";

const crearCurricula = () => {
  return {
    nombre: faker.address.streetName(),
    descripcion: faker.company.catchPhrase(),
  };
};

const crearCurso = () => {
  return {
    nombre: faker.company.catchPhrase(),
    descripcion: faker.company.companyName(),
    otorga: faker.name.findName(),
    usuarios: faker.random.number(),
  };
};

export const crearCurriculas = (cantidadCurriculas) => {
  return new Array(cantidadCurriculas).fill(null).map(crearCurricula);
};

export const crearCursos = (cantidadCursos) => {
  return new Array(cantidadCursos).fill(null).map(crearCurso);
};
