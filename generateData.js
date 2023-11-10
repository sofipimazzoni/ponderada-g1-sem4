const faker = require('faker');

const generateData = () => {
    const data = [];
    for (let i = 0; i < 1000; i++) {
      data.push({ user: { name: faker.name.findName() } });
    }
    return data;
  };
  
  module.exports = generateData;