const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

function createModel() {
  customer = sequelize.define(
        'customers', {
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
            surname: {
                type: Sequelize.STRING,
                allowNull: false
            },
            age: {
                type: Sequelize.STRING,
                allowNull: false
            },
            b_date: {
                type: Sequelize.DATE,
                allowNull: false
            },
            address: {
                type: Sequelize.STRING,
                allowNull: false
            },
            username: {
                type: Sequelize.STRING,
                allowNull: false,
                primaryKey: true
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            customer_type_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
        }, {
            indexes: [
                {
                  name: 'login_index',
                  fields: ['username','password']
                }
              ],
            timestamps: false,
            freezeTableName: true
        }
    );


    return customer
}
const modelAttributes = [ 
    'id', 
    'name', 
    'surname', 
    'age', 
    'b_date', 
    'address', 
    'username', 
    'password', 
    'customer_type_id', 
    ];
module.exports = {createModel,modelAttributes};
