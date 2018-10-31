const Sequelize = require('sequelize');

const sequelize = require('../database/connection');

function createModel() {
  return sequelize.define(
        'smell', {
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
            cost: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
        }, {
            freezeTableName: true
        }
    );
}

module.exports = createModel;
