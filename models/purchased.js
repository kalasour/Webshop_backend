const Sequelize = require('sequelize');
const sequelize = require('../database/connection');
const modelAttributes = [
    'id',
    'type_id',
    'number',
    'size_id',
    'color_id',
    'min_weight',
    'price',
    'smell_id',
    'smell_id1',
    'expr_date'
];

function createModel() {
    const purchased = sequelize.define(
        'purchased_item', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            type_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            number: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            size_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            color_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            min_weight: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            price: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            smell_id: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            smell_id1: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            expr_date: {
                type: Sequelize.DATE,
                allowNull: false
            },
        }, {
            timestamps: false,
            freezeTableName: true
        }
    );
    return purchased;
}

module.exports = {
    createModel,
    modelAttributes
};