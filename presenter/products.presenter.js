const ProductsRepository = require('../repository/product.repository');

class ProductsPresenter {
    static async findAllProduct() {
        const data =  await ProductsRepository.find({});
        return data;
    }

    static async createProduct() {
        return await ProductsRepository.create({sale: 25});
    }

}

module.exports = ProductsPresenter;