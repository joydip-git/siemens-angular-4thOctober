import { products } from "../../../../data/products";
import { Product } from "../models/product.model";
import { IProductService } from "../models/productservice.contract";

export class ProductService implements IProductService {
    getProducts(): Product[] {
        return products
    }

}