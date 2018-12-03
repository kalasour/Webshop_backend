const _ = require('lodash');
const {
    waitingListModel,
    waitingListAttribute,
    customersModel,
    customersAttribute,
    purchsedModel,
    purchasedAttribute,
    candleTypeModel,
    candleTypeAttribute
} = require('../models/All_Model');
async function findAll() {
    const Models = await waitingListModel.findAll({
        attributes: waitingListAttribute,
        include: [{
                model: customersModel,
                as: 'customers_user',
                attributes: customersAttribute
            }, {
                model: customersModel,
                as: 'customers',
                attributes: customersAttribute
            },
            {
                model: purchsedModel,
                as: 'purchased_item',
                attributes: purchasedAttribute,
                include: [{
                    model: candleTypeModel,
                    as: 'candle_type',
                    attributes: candleTypeAttribute
                }, ],
            }
        ]
    });
    return Models

}
async function findById(id_in) {
    const Models = await waitingListModel.findAll({
        attributes: waitingListAttribute,
        where: {
            customers_id: id_in
        },
        include: [{
                model: customersModel,
                as: 'customers_user',
                attributes: customersAttribute
            }, {
                model: customersModel,
                as: 'customers',
                attributes: customersAttribute
            },
            {
                model: purchsedModel,
                as: 'purchased_item',
                attributes: purchasedAttribute
            }
        ]
    });
    return Models;
}


async function update(params) {

    const model = await waitingListModel.findOne({
        attributes: waitingListAttribute,
        where: {
            customers_id: params.customers_id,
            customers_username: params.customers_username,
            purchased_item_id: params.purchased_item_id,
        }
    });
    model.update(params);
    return null;

}

async function Delete(params) {

    const model = await waitingListModel.findOne({
        attributes: waitingListAttribute,
        where: {
            customers_id: params.customers_id,
            customers_username: params.customers_username,
            purchased_item_id: params.purchased_item_id,
        }
    });
    model.destroy();
    return null;
}

async function create(params) {
    await waitingListModel.findOne({
        attributes: waitingListAttribute,
        where: {
            customers_id: params.customers_id,
            customers_username: params.customers_username,
            purchased_item_id: params.purchased_item_id,
        }
    }).then(async (data) => {
        if (data != null) {
            // console.log(params)
            await data.increment({
                'number': params.number
            })
        } else {
            // console.log(params)
            await waitingListModel.create(params);
            
        }
    })
    
}
module.exports = {
    findAll,
    findById,
    create,
    update,
    Delete
};