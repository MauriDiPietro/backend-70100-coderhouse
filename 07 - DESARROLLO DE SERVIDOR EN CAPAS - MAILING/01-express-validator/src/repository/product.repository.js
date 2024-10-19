import persistence from '../daos/persistence.js';
const { prodDao } = persistence;
import ProductDTO from '../dto/product.dto.js';

export default class ProductRepository {
    constructor(){
        this.dao = prodDao
    }

    async getProdById(id) {
        try {
            const response = await this.dao.getById(id);
            return new ProductDTO(response);
        } catch (error) {
            throw new Error(error)
        }
    }
}