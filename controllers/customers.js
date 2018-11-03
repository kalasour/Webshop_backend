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
module.exports = {
    findAll,
    login
};