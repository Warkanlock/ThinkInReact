import faker from "faker";

faker.locale = "en";

const createCurriculum = () => {
  return {
    name: faker.address.streetName(),
    description: faker.company.catchPhrase(),
  };
};

const createCourse = () => {
  return {
    name: faker.company.catchPhrase(),
    description: faker.company.companyName(),
    by: faker.name.findName(),
    users: faker.random.number(),
  };
};

export const createCurriculums = (size) => {
  return new Array(size).fill(null).map(createCurriculum);
};

export const createCourses = (size) => {
  return new Array(size).fill(null).map(createCourse);
};
