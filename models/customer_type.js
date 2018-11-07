const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

function createModel() {
  customers_type= sequelize.define(
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
            timestamps: false,
            freezeTableName: true
        }
    );
    

    return customers_type
}
const modelAttributes = [ 
    'id', 
    'name', 
    ];
module.exports = {createModel,modelAttributes};
