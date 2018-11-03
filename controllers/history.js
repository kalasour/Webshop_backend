const _ = require('lodash');
const {
    historyModel,
    historyAttribute,
    customersModel,
    customersAttribute
} = require('../models/All_Model');
async function findAll() {
    const Models = await historyModel.findAll({
        attributes: historyAttribute,
        include: [{
            model: customersModel,
            as: 'customers_user',
            attributes: customersAttribute
        }, {
            model: customersModel,
            as: 'customers',
            attributes: customersAttribute
        }],
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