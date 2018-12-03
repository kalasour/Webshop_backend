const _ = require('lodash');
const sequelize = require('sequelize');
const {
    viewModel,
    viewAttribute,
    customersModel,
    customersAttribute,
    candleTypeModel,
    candleTypeAttribute
} = require('../models/All_Model');
async function findAll() {
    const Models = await viewModel.findAll({
        attributes: viewAttribute,
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
                model: candleTypeModel,
                as: 'candle_type',
                attributes: candleTypeAttribute
            }
        ]
    });
    return Models

}
async function groupByType() {
    const Models = await viewModel.findAll({
        attributes: [
            [viewModel.sequelize.fn('sum', sequelize.col('time')), 'time'], 'candle_type_id'
        ],
        group: 'candle_type_id',
        order: ['time'],
    });
    return Models

}


async function update(params) {

    const model = await viewModel.findOne({
        attributes: viewAttribute,
        where: {
            customers_id: params.customers_id,
            customers_username: params.customers_username,
            candle_type_id: params.candle_type_id
        }
    });
    model.update(params);
    return null;

}

async function Delete(params) {

    const model = await viewModel.findOne({
        attributes: viewAttribute,
        where: {
            customers_id: params.customers_id,
            customers_username: params.customers_username,
            candle_type_id: params.candle_type_id
        }
    });
    model.destroy();
    return null;
}

async function create(params) {
    await viewModel.findOne({
        attributes: viewAttribute,
        where: {
            customers_id: params.customers_id,
            customers_username: params.customers_username,
            candle_type_id: params.candle_type_id
        }
    }).then(async (data) => {
        if (data != null) {
            await data.increment({
                'time': params.time
            })
        } else {
            model = await viewModel.create(params);
        }
    })
    // console.log(purchased)
    return model;
}
module.exports = {
    findAll,
    groupByType,
    create,
    update,
    Delete
};