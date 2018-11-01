const _ = require('lodash');
const Purchased = require('../models/purchased').createModel();
const candle_type =require('../models/candle_type').createModel();
const modelAttributes=require('../models/purchased').modelAttributes;
async function findAll() {
    const purchaseds = await Purchased.findAll({
        attributes: modelAttributes,
        include: [{
                model: candle_type,
                as:'candle_type',
                attributes:['id','name']
            }, // load all pictures
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