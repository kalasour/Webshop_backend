const Sequelize = require('sequelize');

const sequelize = require('../database/connection');

function createModel() {
  return sequelize.define(
        'report', {
            date: {
                type: Sequelize.DATEONLY,
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
                type: Sequelize.FLOAT,
                primaryKey: true,
                allowNull: false
            },
        }, {
            timestamps: false,
            freezeTableName: true
        }
    );
}
const modelAttributes = [ 
    'date', 
    'gain', 
    'earn', 
    'expense', 
    ];
module.exports = {createModel,modelAttributes};
