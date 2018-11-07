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
    const Models = await colorsModel.findAll({
        attributes: colorsAttribute,
        where: {
            id: id_in
        }
    });
    return Models;
}


async function update(newObj,id_in) {

    const model = await colorsModel.findOne({
        attributes: colorsAttribute,
        where: {
            id: id_in
        }
    });
    model.update(newObj,{fields:colorsAttribute});
    return null;

}

async function Delete(id_in) {

    const model = await colorsModel.findOne({
        attributes: colorsAttribute,
        where: {
            id: id_in
        }
    });
    model.destroy();
    return null;
}
async function create(params) {
    
    const model = await colorsModel.create(params);
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