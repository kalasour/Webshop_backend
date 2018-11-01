const _ = require('lodash');
const Purchased = require('../models/purchased').createModel();
const candle_type =require('../models/candle_type');
const modelAttributes=require('../models/purchased').modelAttributes;
const color=require('../models/colors');
const size=require('../models/size');
const smell=require('../models/smell');
async function findAll() {
    const purchaseds = await Purchased.findAll({
        attributes: modelAttributes,
        include: [{
                model: candle_type.createModel(),
                as:'candle_type',
                attributes:candle_type.modelAttributes
            },
            {
                model: color.createModel(),
                as:'color',
                attributes:color.modelAttributes
            },{
                model: size.createModel(),
                as:'size',
                attributes:size.modelAttributes
            },{
                model: smell.createModel(),
                as:'smell1',
                attributes:smell.modelAttributes
            },{
                model: smell.createModel(),
                as:'smell2',
                attributes:smell.modelAttributes
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