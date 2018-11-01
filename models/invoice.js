const Sequelize = require('sequelize');

const sequelize = require('../database/connection');

function createModel() {
  return sequelize.define(
        'invoice', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            customers_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            customers_username: {
                type: Sequelize.STRING,
                primaryKey: true,
                allowNull: false
            },
            purchased_item_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            price: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            number: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            date: {
                type: Sequelize.DATE,
                allowNull: false
            },
        }, {
            freezeTableName: true
        }
    );
}
const modelAttributes = [ 
    'id', 
    'customers_id', 
    'customers_username', 
    'purchased_item_id', 
    'price', 
    'number', 
    'date', 
    ];
module.exports = {createModel,modelAttributes};
