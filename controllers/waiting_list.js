const _ = require('lodash');
const {
    watingListModel,
    waitingListAttribute,
    customersModel,
    customersAttribute,
    purchsedModel,
    purchasedAttribute
} = require('../models/All_Model');
async function findAll() {
    const Models = await watingListModel.findAll({
        attributes: waitingListAttribute,
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
module.exports = {
    findAll,
    findById
};