const mongoose = require('mongoose');
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

const ProductsPresenter = require('./presenter/products.presenter')
const ProductDetailPresenter = require('./presenter/product-detail.presenter')

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/products', async (req, res) => {
    const data = await ProductsPresenter.findAllProduct();
    res.json({ status: true, products: data })
})

app.get('/insert_product', async (req, res) => {
    const data = await ProductsPresenter.createProduct();
    res.json({ status: true, products: data })
})

app.get('/product-detail/:id', async (req, res) => {
    const productId = req.params.id;
    console.log('productId ', productId);
    
    const productDetail = await ProductDetailPresenter.getProductDetail(productId);

    res.json({status: true, productDetail})
})

app.listen(PORT, () => {
    console.log('Server listen on port 3000')
});