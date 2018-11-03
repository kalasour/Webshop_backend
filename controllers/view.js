const _ = require('lodash');
const sequelize =require('sequelize');
const {
    viewModel,
    viewAttribute,
    customersModel,
    customersAttribute,
    candleTypeModel,
    candleTypeAttribute
} = require('../models/All_Model');
async function findAll() {
    const Models = await viewModel.findAll({
        attributes: viewAttribute,
        include:[{
            model: customersModel,
            as: 'customers_user',
            attributes: customersAttribute
        }, {
            model: customersModel,
            as: 'customers',
            attributes: customersAttribute
        },
         {
            model: candleTypeModel,
            as: 'candle_type',
            attributes: candleTypeAttribute
        }]
    });
    return Models

}
async function findById(id_in) {
    const Models = await Model.findAll({
        attributes: Purchased.modelAttributes,
        where: {
            id: id_in
        }
    });
    return Models;
}
async function groupByType() {
    const Models = await viewModel.findAll({
        attributes: [[viewModel.sequelize.fn('sum', sequelize.col('time')),'time'],'candle_type_id'],
        group:'candle_type_id',
        order:['time'],
    });
    return Models

}

module.exports = {
    findAll,
    findById,
    groupByType
};