const _ = require('lodash');
const Model = require('../models/colors').createModel();
const {colorsModel,colorsAttribute} = require('../models/All_Model');

async function findAll() {
    const Models = await colorsModel.findAll({
        attributes: colorsAttribute,
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