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
async function update(newObj,id_in) {

    const model = await smellModel.findOne({
        attributes: smellAttribute,
        where: {
            id: id_in
        }
    });
    model.update(newObj,{fields:smellAttribute});
    return null;

}

async function Delete(id_in) {

    const model = await smellModel.findOne({
        attributes: smellAttribute,
        where: {
            id: id_in
        }
    });
    model.destroy();
    return null;
}
async function create(params) {
    
    const model = await smellModel.create(params);
    // console.log(purchased)
    return model;
  }
module.exports = {
    findAll,
    findById,
    create,
    update,
    Delete,
};