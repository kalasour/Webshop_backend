const Sequelize = require('sequelize');
const sequelize = require('../database/connection');
const purchsedModel = require('./purchased').createModel();
const purchasedAttribute = require('./purchased').modelAttributes;
const candleTypeModel = require('./candle_type').createModel();
const candleTypeAttribute = require('./candle_type').modelAttributes;
const colorsModel = require('./colors').createModel();
const colorsAttribute = require('./colors').modelAttributes;
const customerTypeModel = require('./customer_type').createModel();
const customerTypeAttribute = require('./customer_type').modelAttributes;
const customersModel = require('./customers').createModel();
const customersAttribute = require('./customers').modelAttributes;
const expenseModel = require('./expense').createModel();
const expenseAttribute = require('./expense').modelAttributes;
const historyModel = require('./history').createModel();
const historyAttribute = require('./history').modelAttributes;
const invoiceModel = require('./invoice').createModel();
const invoiceAttribute = require('./invoice').modelAttributes;
const reportModel = require('./report').createModel();
const reportAttribute = require('./report').modelAttributes;
const sizeModel = require('./size').createModel();
const sizeAttribute = require('./size').modelAttributes;
const smellModel = require('./smell').createModel();
const smellAttribute = require('./smell').modelAttributes;
const viewModel = require('./view').createModel();
const viewAttribute = require('./view').modelAttributes;
const waitingListModel = require('./waiting_list').createModel();
const waitingListAttribute = require('./waiting_list').modelAttributes;
const all = {
    purchsedModel,
    purchasedAttribute,
    candleTypeModel,
    candleTypeAttribute,
    colorsModel,
    colorsAttribute,
    customerTypeModel,
    customerTypeAttribute,
    customersModel,
    customersAttribute,
    expenseModel,
    expenseAttribute,
    historyModel,
    historyAttribute,
    invoiceModel,
    invoiceAttribute,
    reportModel,
    reportAttribute,
    sizeModel,
    sizeAttribute,
    smellModel,
    smellAttribute,
    viewModel,
    viewAttribute,
    waitingListModel,
    waitingListAttribute,
    sequelize
}


purchsedModel.belongsTo(candleTypeModel, {
    as: 'candle_type',
    foreignKey: 'type_id',
    targetKey: 'id',
    onDelete: 'SET NULL',
    constraints: false,
    onUpdate: 'CASCADE'
})
purchsedModel.belongsTo(colorsModel, {
    as: 'color',
    foreignKey: 'color_id',
    targetKey: 'id',
    onDelete: 'SET NULL',
    constraints: false,
    onUpdate: 'CASCADE'
})
purchsedModel.belongsTo(sizeModel, {
    as: 'size',
    foreignKey: 'size_id',
    targetKey: 'id',
    onDelete: 'SET NULL',
    constraints: false,
    onUpdate: 'CASCADE'
})
purchsedModel.belongsTo(smellModel, {
    as: 'smell1',
    foreignKey: 'smell_id',
    targetKey: 'id',
    onDelete: 'SET NULL',
    constraints: false,
    onUpdate: 'CASCADE'
})
purchsedModel.belongsTo(smellModel, {
    as: 'smell2',
    foreignKey: 'smell_id1',
    targetKey: 'id',
    onDelete: 'SET NULL',
    constraints: false,
    onUpdate: 'CASCADE'
})
purchsedModel.hasMany(waitingListModel, {
    foreignKey: 'purchased_item_id',
})
purchsedModel.hasMany(historyModel, {
    foreignKey: 'purchased_item_id',
})
purchsedModel.hasMany(invoiceModel, {
    foreignKey: 'purchased_item_id',
})


candleTypeModel.hasMany(purchsedModel, {
    foreignKey: 'type_id',
});
candleTypeModel.hasMany(viewModel, {
    foreignKey: 'candle_type_id',
});
candleTypeModel.hasMany(expenseModel, {
    foreignKey: 'candle_type_id',
});

colorsModel.hasMany(purchsedModel, {
    foreignKey:'color_id',
})


customerTypeModel.hasMany(customersModel, {
    foreignKey:'customer_type_id',
})


customersModel.belongsTo(customerTypeModel, {
    as: 'customer_type',
    foreignKey: 'customer_type_id',
    targetKey: 'id',
    onDelete: 'SET NULL',
    constraints: false,
    onUpdate: 'CASCADE'
})

customersModel.hasMany(viewModel, {
    foreignKey:['customers_id','customers_username'],
})
customersModel.hasMany(waitingListModel, {
    foreignKey:['customers_id','customers_username'],
})
customersModel.hasMany(invoiceModel, {
    foreignKey:['customers_id','customers_username'],
})
customersModel.hasMany(historyModel, {
    foreignKey:['customers_id','customers_username'],
})


expenseModel.belongsTo(candleTypeModel, {
    as: 'candle_type',
    foreignKey: 'candle_type_id',
    targetKey: 'id',
    onDelete: 'SET NULL',
    constraints: false,
    onUpdate: 'CASCADE'
})


historyModel.belongsTo(purchsedModel, {
    as: 'purchased_item',
    foreignKey: 'purchased_item_id',
    targetKey: 'id',
    onDelete: 'SET NULL',
    constraints: false,
    onUpdate: 'CASCADE'
})
historyModel.belongsTo(customersModel, {
    as: 'customers',
    foreignKey: 'customers_id',
    targetKey: 'id',
    onDelete: 'SET NULL',
    constraints: false,
    onUpdate: 'CASCADE'
})
historyModel.belongsTo(customersModel, {
    as: 'customers_user',
    foreignKey:'customers_username',
    targetKey: 'username',
    onDelete: 'SET NULL',
    constraints: false,
    onUpdate: 'CASCADE'
})

invoiceModel.belongsTo(customersModel, {
    as: 'customers_user',
    foreignKey:'customers_username',
    targetKey: 'username',
    onDelete: 'SET NULL',
    constraints: false,
    onUpdate: 'CASCADE'
})

invoiceModel.belongsTo(customersModel, {
    as: 'customers',
    foreignKey: 'customers_id',
    targetKey: 'id',
    onDelete: 'SET NULL',
    constraints: false,
    onUpdate: 'CASCADE'
})

invoiceModel.belongsTo(purchsedModel, {
    as: 'purchased_item',
    foreignKey: 'purchased_item_id',
    targetKey: 'id',
    onDelete: 'SET NULL',
    constraints: false,
    onUpdate: 'CASCADE'
})

sizeModel.hasMany(purchsedModel, {
    foreignKey:'size_id',
})


smellModel.hasMany(purchsedModel, {
    foreignKey:'smell_id',
})
smellModel.hasMany(purchsedModel, {
    foreignKey:'smell_id1',
})


viewModel.belongsTo(candleTypeModel, {
    as: 'candle_type',
    foreignKey: 'candle_type_id',
    targetKey: 'id',
    onDelete: 'SET NULL',
    constraints: false,
    onUpdate: 'CASCADE'
})
viewModel.belongsTo(customersModel, {
    as: 'customers_user',
    foreignKey:'customers_username',
    targetKey: 'username',
    onDelete: 'SET NULL',
    constraints: false,
    onUpdate: 'CASCADE'
})

viewModel.belongsTo(customersModel, {
    as: 'customers',
    foreignKey: 'customers_id',
    targetKey: 'id',
    onDelete: 'SET NULL',
    constraints: false,
    onUpdate: 'CASCADE'
})


waitingListModel.belongsTo(customersModel, {
    as: 'customers_user',
    foreignKey:'customers_username',
    targetKey: 'username',
    onDelete: 'SET NULL',
    constraints: false,
    onUpdate: 'CASCADE'
})

waitingListModel.belongsTo(customersModel, {
    as: 'customers',
    foreignKey: 'customers_id',
    targetKey: 'id',
    onDelete: 'SET NULL',
    constraints: false,
    onUpdate: 'CASCADE'
})

waitingListModel.belongsTo(purchsedModel, {
    as: 'purchased_item',
    foreignKey: 'purchased_item_id',
    targetKey: 'id',
    onDelete: 'SET NULL',
    constraints: false,
    onUpdate: 'CASCADE'
})
module.exports = all;