const Sequelize = require('sequelize');

const sequelize = require('../database/connection');

function createModel() {
  return sequelize.define(
        'history', {
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
            number: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
        }, {
            timestamps: false,
            freezeTableName: true
        }
    );
}
const modelAttributes = [ 
    'customers_id', 
    'customers_username', 
    'purchased_item_id', 
    'number', 
    ];
module.exports = {createModel,modelAttributes};
