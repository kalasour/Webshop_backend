const _ = require('lodash');
const {expenseModel,expenseAttribute,candleTypeModel,candleTypeAttribute} = require('../models/All_Model');

async function findAll() {
    const Models = await expenseModel.findAll({
        attributes: expenseAttribute,
        include:[{
            model: candleTypeModel,
            as:'candle_type',
            attributes:candleTypeAttribute
        }]
    });
    return Models

}
async function findById(id_in) {
    const Models = await Model.findAll({
        attributes: Purchased.modelAttributes,
        where: {
            id: id_in
        }
    });
    return Models;
}
module.exports = {
    findAll,
    findById
};