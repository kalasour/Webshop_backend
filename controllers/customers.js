const _ = require('lodash');
const {
    customersModel,
    customersAttribute,
    customerTypeModel,
    customerTypeAttribute
} = require('../models/All_Model');

async function findAll() {
    const Models = await customersModel.findAll({
        attributes: customersAttribute,
        include: [{
            model: customerTypeModel,
            as: 'customer_type',
            attributes: customerTypeAttribute
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