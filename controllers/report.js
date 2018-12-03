const _ = require('lodash');
const {
    reportModel,
    reportAttribute,
    sequelize
} = require('../models/All_Model');
async function findAll() {
    const Models = await reportModel.findAll({
        attributes: reportAttribute,
    });
    return Models

}

async function findByMonthAndYear(m, y) {
    const Models = await reportModel.findAll({
        where: {
            $and: [sequelize.where(sequelize.fn('MONTH', sequelize.col('date')), m), sequelize.where(sequelize.fn('YEAR', sequelize.col('date')), y)]
        }
    });
    return Models

}
async function findAllMonthAndYear(m, y) {
    sum = {
        earn: 0,
        gain: 0,
        expense: 0
    }
    const Models = await findByMonthAndYear(m, y)
    _.map(Models, model => {
        sum.earn += model.earn;
        sum.gain += model.gain;
        sum.expense += parseFloat(model.expense);
    });
    return sum

}

async function update(newObj, date) {
    const model = await reportModel.findOne({
        where: {
            date: date
        }
    }).then(async (data) => {
        if (data != null) {
            await sequelize.query("UPDATE `report` SET `gain` = " + newObj.gain + ", `earn` = " + newObj.earn + ", `expense` = " + newObj.expense + " WHERE `report`.`date` = '" + newObj.date + ";" + "'");
        }
    })

    return null;

}

async function Delete(date) {
    const model = await reportModel.findOne({
        where: {
            date: date
        }
    });
    model.destroy();
    return null;
}
async function create(params) {
    const check = await reportModel.findOne({
        where: {
            date: params.date,
        }
    }).then(async (data) => {
        if (data != null) {
            await data.increment({
                'gain': params.gain,
                'earn': params.earn,
                'expense': params.expense
            })
        } else
            model = await reportModel.create(params);
    })
    // console.log(purchased)
    return model;
}
module.exports = {
    findAll,
    update,
    Delete,
    create,
    findByMonthAndYear,
    findAllMonthAndYear
};