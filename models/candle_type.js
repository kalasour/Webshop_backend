const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

function createModel() {
    const candle_type = sequelize.define(
        'candle_type', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: Sequelize.ENUM,
                values: ['Generals','Flowers','Geoshapes','Symbols'],
                allowNull: false
            },
        }, {
            timestamps: false,
            freezeTableName: true
        }
    );

    return candle_type;
}
const modelAttributes = [
    'id',
    'name',
];
module.exports = {
    createModel,
    modelAttributes
};