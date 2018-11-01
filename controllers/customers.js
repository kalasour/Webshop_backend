const _ = require('lodash');
const Model = require('../models/customers').createModel();
const modelAttributes=require('../models/customers').modelAttributes;
async function findAll() {
    const Models = await Model.findAll({
        attributes: modelAttributes,
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