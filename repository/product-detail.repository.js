const models = require('../models');

class ProductDetailRepository {

    static async findOne(query = {}, projection = {}) {
        return await models.productDetail.findOne(query, projection);
    }
}

module.exports = ProductDetailRepository;