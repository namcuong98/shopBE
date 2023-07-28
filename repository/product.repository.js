const models = require('../models');

class ProductsRepository {

    static async findOne(query = {}, projection = {}) {
        return await models.products.findOne(query, projection);
    }

    static async find(query = {}, projection = {}) {
        return await models.products.find(query, projection);
    }

    static async create(query = {}, projection = {}) {
        return await models.products.create(query);
    }
}

module.exports = ProductsRepository;