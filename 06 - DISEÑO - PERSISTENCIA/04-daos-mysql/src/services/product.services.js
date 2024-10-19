import Services from "./class.services.js";
import persistence from "../daos/persistence.js";
import ProductRepository from "../repository/product.repository.js";
const { prodDao } = persistence;
const prodRepository = new ProductRepository();

export default class ProductService extends Services {
    constructor(){
        super(prodDao);
    }

    async getProdById(id){
        try {
            return prodRepository.getProdById(id);
        } catch (error) {
            throw new Error(error)
        }
    }
};