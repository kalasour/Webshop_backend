const Sequelize = require('sequelize');

const sequelize = require('../database/connection');

function createModel() {
  return sequelize.define(
        'waiting_list', {
            customers_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            customers_username: {
                type: Sequelize.STRING,
                allowNull: false,
                primaryKey: true
            },
            candle_type_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            date_in: {
                type: Sequelize.DATE,
                allowNull: false
            },
            date_out: {
                type: Sequelize.DATE,
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
