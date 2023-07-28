'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Define Product Schema
const products = new Schema({
    sale: { type: Number },
    imgProduct: { type: String },
    title: { type: String },
    oldPrice: { type: Number},
    newPrice: { type: Number},
    soldQuantity: { type: Number},
    tradeMark: { type: String},
    country: { type: String},
  },{
    collection: 'products'
});

module.exports = mongoose.model('products', products);