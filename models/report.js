const Sequelize = require('sequelize');

const sequelize = require('../database/connection');

function createModel() {
  return sequelize.define(
        'report', {
            date: {
                type: Sequelize.DATE,
                primaryKey: true,
                allowNull: false
            },
            gain: {
                type: Sequelize.FLOAT,
                primaryKey: true,
                allowNull: false
            },
            earn: {
                type: Sequelize.FLOAT,
                primaryKey: true,
                allowNull: false
            },
            expense: {
                type: Sequelize.JSON,
                primaryKey: true,
                allowNull: false
            },
        }, {
            freezeTableName: true
        }
    );
}

module.exports = createModel;
