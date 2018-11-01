const Sequelize = require('sequelize');
const candle_type = require('./candle_type').createModel();
const color = require('./colors').createModel();
const smell = require('./smell').createModel();
const size = require('./size').createModel();
const waiting_list = require('./waiting_list').createModel();
const invoice = require('./invoice').createModel();
const history = require('./history').createModel();

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
            freezeTableName: true
        }
    );

    purchased.belongsTo(candle_type, {
        as: 'candle_type',
        foreignKey: 'type_id',
        targetKey: 'id',
        onDelete: 'SET NULL',
        constraints: false,
        onUpdate: 'CASCADE'
    })
    purchased.belongsTo(color, {
        as: 'color',
        foreignKey: 'color_id',
        targetKey: 'id',
        onDelete: 'SET NULL',
        constraints: false,
        onUpdate: 'CASCADE'
    })
    purchased.belongsTo(size, {
        as: 'size',
        foreignKey: 'size_id',
        targetKey: 'id',
        onDelete: 'SET NULL',
        constraints: false,
        onUpdate: 'CASCADE'
    })
    purchased.belongsTo(smell, {
        as: 'smell1',
        foreignKey: 'smell_id',
        targetKey: 'id',
        onDelete: 'SET NULL',
        constraints: false,
        onUpdate: 'CASCADE'
    })
    purchased.belongsTo(smell, {
        as: 'smell2',
        foreignKey: 'smell_id1',
        targetKey: 'id',
        onDelete: 'SET NULL',
        constraints: false,
        onUpdate: 'CASCADE'
    })
    purchased.hasMany(waiting_list, {
        foreignKey:'purchased_item_id',
    })
    purchased.hasMany(history, {
        foreignKey:'purchased_item_id',
    })
    purchased.hasMany(invoice, {
        foreignKey:'purchased_item_id',
    })



    return purchased;
}

module.exports = {
    createModel,
    modelAttributes
};