const _ = require('lodash');
const {
    watingListModel,
    waitingListAttribute,
    customersModel,
    customersAttribute,
    purchsedModel,
    purchasedAttribute,
    candleTypeModel,
    candleTypeAttribute
} = require('../models/All_Model');
async function findAll() {
    const Models = await watingListModel.findAll({
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
    const Models = await watingListModel.findAll({
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
module.exports = {
    findAll,
    findById
};