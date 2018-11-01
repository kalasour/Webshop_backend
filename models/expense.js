const Sequelize = require('sequelize');

const sequelize = require('../database/connection');

function createModel() {
    return sequelize.define(
        'expense', {
            candle_type_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            price: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
        }, {
            freezeTableName: true
        }
    );
}
const modelAttributes = [
    'candle_type_id',
    'price',
];
module.exports = {
    createModel,
    modelAttributes
};