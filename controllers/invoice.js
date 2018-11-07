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


async function update(newObj,id_in) {

    const model = await invoiceModel.findOne({
        attributes: invoiceAttribute,
        where: {
            id: id_in
        }
    });
    model.update(newObj,{fields:invoiceAttribute});
    return null;

}

async function Delete(id_in) {

    const model = await invoiceModel.findOne({
        attributes: invoiceAttribute,
        where: {
            id: id_in
        }
    });
    model.destroy();
    return null;
}
async function create(params) {
    
    const model = await invoiceModel.create(params);
    // console.log(purchased)
    return model;
  }
module.exports = {
    findAll,
    findById,
    create,
    update,
    Delete,
    TopSale
};