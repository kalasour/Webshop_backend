const _ = require('lodash');
const {expenseModel,candleTypeModel} = require('../models/All_Model');

async function findAll() {
    const Models = await expenseModel.findAll({
        include:[{
            model: candleTypeModel,
            as:'candle_type',
        }]
    });
    return Models

}
async function update(newObj,id_in) {

    const model = await expenseModel.findOne({
        where: {
            candle_type_id: id_in
        }
    });
    model.update(newObj);
    return null;

}

async function getPrice(id_in) {
    
    const model = await expenseModel.findOne({
        where: {
            candle_type_id: id_in
        }
    })
    return model.price;

}

async function Delete(id_in) {

    const model = await expenseModel.findOne({
        where: {
            candle_type_id: id_in
        }
    });
    model.destroy();
    return null;
}
async function create(params) {
    const check = await expenseModel.findOne({
        where: {
            candle_type_id: params.candle_type_id,
        }
    }).then( async (data) =>  {
        if (data != null) await data.increment(['price'], { by: params.price })
        else
        model = await expenseModel.create(params);
    })
    // console.log(purchased)
    return model;
  }

module.exports = {
    findAll,update,Delete,create,getPrice
};