import Controllers from "./class.controller.js";
import ProductService from "../services/product.services.js";
import { createResponse } from "../utils.js";
const prodService = new ProductService();

export default class ProductController extends Controllers {
    constructor(){
        super(prodService);
    }

    getProdById = async (req, res, next) =>{
        try {
            const {id} = req.params
            const prod = await this.service.getProdById(id);
            if(!prod) return createResponse(req, res, 404, prod)
                else return createResponse(req, res, 200, prod)
        } catch (error) {
            next(error)
        }
    }
};