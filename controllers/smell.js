const _ = require('lodash');
const {
    smellModel,
    smellAttribute
} = require('../models/All_Model');
async function findAll() {
    const Models = await smellModel.findAll({
        attributes: smellAttribute,
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