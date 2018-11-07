const _ = require('lodash');
const {customerTypeModel,customerTypeAttribute} = require('../models/All_Model');

async function findAll() {
    const Models = await customerTypeModel.findAll({
        attributes: customerTypeAttribute,
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

    const model = await customerTypeModel.findOne({
        attributes: customerTypeAttribute,
        where: {
            id: id_in
        }
    });
    model.update(newObj,{fields:customerTypeAttribute});
    return null;

}

async function Delete(id_in) {

    const model = await customerTypeModel.findOne({
        attributes: customerTypeAttribute,
        where: {
            id: id_in
        }
    });
    model.destroy();
    return null;
}
async function create(params) {
    
    const model = await customerTypeModel.create(params);
    // console.log(purchased)
    return model;
  }
module.exports = {
    findAll,
    findById,
    create,
    update,
    Delete
};