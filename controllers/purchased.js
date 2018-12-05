const _ = require('lodash');
const sequelize = require('sequelize');
const {
    purchsedModel,
    purchasedAttribute,
    candleTypeModel,
    colorsModel,
    sizeModel,
    smellModel,
    viewModel,
    invoiceModel,
} = require('../models/All_Model')
const invoice = require('../controllers/invoice');
const waiting_list = require('../controllers/waiting_list');
const report = require('../controllers/report');
const expense = require('../controllers/expense');
async function create(params) {

    const purchased = await purchsedModel.create(params);
    // console.log(purchased)
    return purchased;
}

async function findAll() {
    const purchaseds = await purchsedModel.findAll({
        // attributes: purchasedAttribute,
        include: [{
                model: candleTypeModel,
                as: 'candle_type',
                // attributes: candleTypeAttribute
            },
            {
                model: colorsModel,
                as: 'color',
                // attributes: colorsAttribute
            }, {
                model: sizeModel,
                as: 'size',
                // attributes: sizeAttribute
            }, {
                model: smellModel,
                as: 'smell1',
                // attributes: smellAttribute
            }, {
                model: smellModel,
                as: 'smell2',
                // attributes: smellAttribute
            }
        ]
    });
    return purchaseds
    // return _.map(purchaseds, purchased => {
    //     return pack(purchased);
    // });
}
async function promotion() {
    const purchaseds = await purchsedModel.findAll({
        // attributes: purchasedAttribute,
        include: [{
                model: candleTypeModel,
                as: 'candle_type',
                // attributes: candleTypeAttribute
            },
            {
                model: colorsModel,
                as: 'color',
                // attributes: colorsAttribute
            }, {
                model: sizeModel,
                as: 'size',
                // attributes: sizeAttribute
            }, {
                model: smellModel,
                as: 'smell1',
                // attributes: smellAttribute
            }, {
                model: smellModel,
                as: 'smell2',
                // attributes: smellAttribute
            }
        ],
        order: ['expr_date']
    });
    return purchaseds
    // return _.map(purchaseds, purchased => {
    //     return pack(purchased);
    // });
}
async function TopView() {
    const TopView = await viewModel.findAll({
        attributes: [
            [viewModel.sequelize.fn('sum', sequelize.col('time')), 'time'], 'candle_type_id'
        ],
        group: 'candle_type_id',
        order: ['time'],
    })
    const purchaseds = await findAll();
    textView = JSON.stringify(TopView)
    viewObj = JSON.parse(textView)
    // return purchaseds;
    const data = _.map(purchaseds, purchased => {
        text = JSON.stringify(purchased);
        newObj = JSON.parse(text)
        newObj.time = 0;
        _.map(viewObj, view => {
            if (newObj.type_id == view.candle_type_id) {
                newObj.time = parseInt(view.time)
            }
        })

        return newObj;
    });
    return _.sortBy(data, 'time').reverse();
}

async function TopSale() {
    const TopSale = await invoiceModel.findAll({
        attributes: [
            [invoiceModel.sequelize.fn('sum', sequelize.col('number')), 'number'], 'id'
        ],
        group: 'id',
        order: ['number'],
    });

    const purchaseds = await findAll();
    textSale = JSON.stringify(TopSale)
    saleObj = JSON.parse(textSale)
    // return purchaseds;
    const data = _.map(purchaseds, purchased => {
        text = JSON.stringify(purchased);
        newObj = JSON.parse(text)
        newObj.number = 0;
        _.map(saleObj, view => {
            if (newObj.id == view.id) {
                newObj.number = parseInt(view.number)
            }
        })

        return newObj;
    });
    return _.sortBy(data, 'number').reverse();
}


async function findById(id_in) {

    const purchaseds = await Purchased.findAll({
        attributes: Purchased.modelAttributes,
        where: {
            id: id_in
        }
    });
    return _.map(purchaseds, purchased => {

        return purchased;
    });
}
async function onlyType(input) {
    const purchaseds = await purchsedModel.findAll({
        // attributes: purchasedAttribute,
        include: [{
                model: candleTypeModel,
                as: 'candle_type',
                // attributes: candleTypeAttribute
            },
            {
                model: colorsModel,
                as: 'color',
                // attributes: colorsAttribute
            }, {
                model: sizeModel,
                as: 'size',
                // attributes: sizeAttribute
            }, {
                model: smellModel,
                as: 'smell1',
                // attributes: smellAttribute
            }, {
                model: smellModel,
                as: 'smell2',
                // attributes: smellAttribute
            }
        ],
        where: {
            type_id: input
        }
    });
    return purchaseds
    // return _.map(purchaseds, purchased => {
    //     return pack(purchased);
    // });
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

async function updatePurchased(newObj, id_in) {

    const purchaseds = await purchsedModel.findOne({
        attributes: purchasedAttribute,
        where: {
            id: id_in
        }
    });
    purchaseds.update(newObj, {
        fields: purchasedAttribute
    });
    return null;

}

async function Buy(newObj) {
    console.log(newObj)
    var date_out = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000))
    if (newObj.wnumber > 0) await waiting_list.create({
        customers_id: newObj.user.id,
        customers_username: newObj.user.username,
        purchased_item_id: newObj.id,
        date_in: new Date(),
        date_out: date_out,
        number:newObj.wnumber
    })
    if (newObj.inumber > 0) await invoice.create({
        customers_id: newObj.user.id,
        customers_username: newObj.user.username,
        purchased_item_id: newObj.id,
        number:newObj.inumber,
        price:newObj.earn,
        date:new Date()
    })
    var ex=await expense.getPrice(newObj.type_id).then(data=>ex=data)
    var gain=await newObj.earn-(ex*newObj.amount);
    await report.create({date:new Date(),gain:gain,earn:newObj.earn,expense:ex*newObj.amount})
    const purchaseds = await purchsedModel.findOne({
        attributes: purchasedAttribute,
        where: {
            id: newObj.id
        }
    });
    purchaseds.update(newObj,{fields:purchasedAttribute});
    return null;

}

async function deletePurchased(id_in) {

    const purchaseds = await purchsedModel.findOne({
        attributes: purchasedAttribute,
        where: {
            id: id_in
        }
    });
    purchaseds.destroy();
    return null;
}
module.exports = {
    findAll,
    findById,
    TopView,
    promotion,
    TopSale,
    onlyType,
    create,
    deletePurchased,
    updatePurchased,
    Buy
};