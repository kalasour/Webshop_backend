const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

function createModel() {
    expense = sequelize.define(
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
            timestamps: false,
            freezeTableName: true
        }
    );
   

    return expense;
}
const modelAttributes = [
    'candle_type_id',
    'price',
];
module.exports = {
    createModel,
    modelAttributes
};