const Sequelize = require('sequelize');

const sequelize = require('../database/connection');

function createModel() {
  return sequelize.define(
        'size', {
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
            price_per_size: {
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
    'id', 
    'name',
     'price_per_size',
    ];
module.exports = {createModel,modelAttributes};
