const _ = require('lodash');
const {
    purchsedModel,
    purchasedAttribute,
    candleTypeModel,
    candleTypeAttribute,
    colorsModel,
    colorsAttribute,
    sizeModel,
    sizeAttribute,
    smellModel,
    smellAttribute,
} = require('../models/All_Model')
async function findAll() {
    const purchaseds = await purchsedModel.findAll({
        attributes: purchasedAttribute,
        include: [{
                model: candleTypeModel,
                as: 'candle_type',
                attributes: candleTypeAttribute
            },
            {
                model: colorsModel,
                as: 'color',
                attributes: colorsAttribute
            }, {
                model: sizeModel,
                as: 'size',
                attributes: sizeAttribute
            }, {
                model: smellModel,
                as: 'smell1',
                attributes: smellAttribute
            }, {
                model: smellModel,
                as: 'smell2',
                attributes: smellAttribute
            }
        ]
    });
    return purchaseds
    // return _.map(purchaseds, purchased => {
    //     return pack(purchased);
    // });
}

async function findById(id_in) {

    const purchaseds = await Purchased.findAll({
        attributes: Purchased.modelAttributes,
        where: {
            id: id_in
        }
    });
    return _.map(purchaseds, purchased => {
        return pack(purchased);
    });
}

// function pack(item) {
//     return {
//         id: item.id,
//         type_id: item.type_id,
//         number: item.number,
//         size_id: item.size_id,
//         color_id: item.color_id,
//         min_weight: item.min_weight,
//         price: item.price,
//         smell_id: item.smell_id,
//         smell_id1: item.smell_id1,
//         expr_date: item.expr_date
//     };
// }

module.exports = {
    findAll,
    findById
};