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

async function update(newObj,id_in) {

    const model = await sizeModel.findOne({
        attributes: sizeAttribute,
        where: {
            id: id_in
        }
    });
    model.update(newObj,{fields:sizeAttribute});
    return null;

}

async function Delete(id_in) {

    const model = await sizeModel.findOne({
        attributes: sizeAttribute,
        where: {
            id: id_in
        }
    });
    model.destroy();
    return null;
}
async function create(params) {
    
    const model = await sizeModel.create(params);
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