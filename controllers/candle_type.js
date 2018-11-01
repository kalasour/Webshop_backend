const _ = require('lodash');
const Model = require('../models/candle_type').createModel();
const modelAttributes=require('../models/candle_type').modelAttributes;
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