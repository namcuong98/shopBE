'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Define Product Schema
const productDetail = new Schema({
    sale: { type: Number },
    productId: { type: String},
    img: { type: String},
    title: { type: String},
    rate: { type: Number},
    sold: { type: Number},
    price: { type: Number},
    saleCode: { type: Array},
    delivery: { type: Object}
  },{
    collection: 'productDetail'
});

module.exports = mongoose.model('productDetail', productDetail);