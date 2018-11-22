const _ = require('lodash');
const {candleTypeModel,candleTypeAttribute} = require('../models/All_Model');

async function findAll() {
    const Models = await candleTypeModel.findAll({
        attributes: candleTypeAttribute,
    });
    return Models

}
async function findById(id_in) {
    const Models = await candleTypeModel.findAll({
        attributes: candleTypeAttribute,
        where: {
            id: id_in
        }
    });
    return Models;
}
async function update(newObj,id_in) {

    const model = await candleTypeModel.findOne({
        attributes: candleTypeAttribute,
        where: {
            id: id_in
        }
    });
    model.update(newObj,{fields:candleTypeAttribute});
    return null;

}

async function Delete(id_in) {

    const model = await candleTypeModel.findOne({
        where: {
            id: id_in
        }
    });
    model.destroy();
    return null;
}
async function create(params) {
    
    const model = await candleTypeModel.create(params);
    // console.log(purchased)
    return model;
  }
module.exports = {
    findAll,
    findById,
    update,
    Delete,
    create
};