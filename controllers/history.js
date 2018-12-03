const _ = require('lodash');
const {
    historyModel,
    historyAttribute,
    customersModel,
    customersAttribute
} = require('../models/All_Model');
async function findAll() {
    const Models = await historyModel.findAll({
        attributes: historyAttribute,
        include: [{
            model: customersModel,
            as: 'customers_user',
            attributes: customersAttribute
        }, {
            model: customersModel,
            as: 'customers',
            attributes: customersAttribute
        }],
    });
    return Models

}


async function update(newObj) {

    const model = await historyModel.findOne({
        attributes: historyAttribute,
        where: {
            customers_id: newObj.customers_id,
            customers_username: newObj.customers_username,
            purchased_item_id: newObj.purchased_item_id,
        }
    });
    model.update(newObj);
    return null;

}

async function Delete(newObj) {
    console.log(newObj)
    const model = await historyModel.findOne({
        attributes: historyAttribute,
        where: {
            customers_id: newObj.customers_id,
            customers_username: newObj.customers_username,
            purchased_item_id: newObj.purchased_item_id,
        }
    });
    model.destroy();
    return null;
}
async function create(params) {
    await historyModel.findOne({
        attributes: historyAttribute,
        where: {
            customers_id: params.customers_id,
            customers_username: params.customers_username,
            purchased_item_id: params.purchased_item_id,
        }
    }).then(async (data) => {
        console.log(params.number)
        if (data != null) await data.increment(['number'], {
            by: params.number
        })
        else
            model = await historyModel.create(params);
    })
    // console.log(purchased)
    return model;
}

module.exports = {
    findAll,
    update,
    Delete,
    create
};