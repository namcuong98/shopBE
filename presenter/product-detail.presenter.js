const models = require('../models');
const ProductDetailRepository = require('../repository/product-detail.repository');

class ProductDetailPresenter {

    static async getProductDetail(productId) {
        return await ProductDetailRepository.findOne({productId: productId})
    }
}

module.exports = ProductDetailPresenter;