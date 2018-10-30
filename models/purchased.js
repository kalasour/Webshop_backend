const Sequelize = require('sequelize');

const sequelize = require('../database/connection');

function createPurchasedModel() {
  return sequelize.define(
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
}

module.exports = createPurchasedModel;
