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
            freezeTableName: true
        }
    );
}

module.exports = createModel;
