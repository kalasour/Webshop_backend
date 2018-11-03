const _ = require('lodash');
const {
    sizeModel,
    sizeAttribute
} = require('../models/All_Model');
async function findAll() {
    const Models = await sizeModel.findAll({
        attributes: sizeAttribute,
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