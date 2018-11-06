const _ = require('lodash');
const sequelize =require('sequelize');
const {
    invoiceModel,
    invoiceAttribute,
    customersModel,
    customersAttribute,
    purchsedModel,
    purchasedAttribute
} = require('../models/All_Model');
async function findAll() {
    const Models = await invoiceModel.findAll({
        attributes: invoiceAttribute,
        include: [{
            model: customersModel,
            as: 'customers_user',
            attributes: customersAttribute
        }, {
            model: customersModel,
            as: 'customers',
            attributes: customersAttribute
        },
         {
            model: purchsedModel,
            as: 'purchased_item',
            attributes: purchasedAttribute
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
async function TopSale() {
    const Models = await invoiceModel.findAll({
        attributes: [[invoiceModel.sequelize.fn('sum', sequelize.col('number')),'number'],'id'],
        group:'id',
        order:['number'],
    });
    return Models.reverse();

}
module.exports = {
    findAll,
    findById,
    TopSale
};