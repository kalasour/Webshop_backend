const Sequelize = require('sequelize');

const sequelize = require('../database/connection');

function createModel() {
  return sequelize.define(
        'customer_type', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
        }, {
            freezeTableName: true
        }
    );
}
const modelAttributes = [ 
    'id', 
    'name', 
    ];
module.exports = {createModel,modelAttributes};
