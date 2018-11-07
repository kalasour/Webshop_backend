const _ = require('lodash');
const {
    customersModel,
    customersAttribute,
    customerTypeModel,
    customerTypeAttribute
} = require('../models/All_Model');

async function findAll() {
    const Models = await customersModel.findAll({
        attributes: customersAttribute,
        include: [{
            model: customerTypeModel,
            as: 'customer_type',
            attributes: customerTypeAttribute
        }]
    });
    return Models

}
async function login(user_in,pass_in) {
    const Models = await customersModel.findAll({
        attributes: customersAttribute,
        include: [{
            model: customerTypeModel,
            as: 'customer_type',
            attributes: customerTypeAttribute
        }],
        where:{
            username:user_in,
            password:pass_in
        }
    });
    return Models

}
async function update(newObj,id_in) {

    const model = await customersModel.findOne({
        attributes: customersAttribute,
        where: {
            id: id_in
        }
    });
    model.update(newObj,{fields:customersAttribute});
    return null;

}

async function Delete(id_in) {

    const model = await customersModel.findOne({
        attributes: customersAttribute,
        where: {
            id: id_in
        }
    });
    model.destroy();
    return null;
}
async function create(params) {
    
    const model = await customersModel.create(params);
    // console.log(purchased)
    return model;
  }
module.exports = {
    findAll,
    findById,
    create,
    update,
    Delete,
    login
};