const Sequelize =require ('sequelize');
const sequelize = new Sequelize('webshop', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    idle: 10000,
    port: 3306
  }
});


module.exports = sequelize;
