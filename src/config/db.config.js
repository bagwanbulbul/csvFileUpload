module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "bulbul18",
    DB: "techActive",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };