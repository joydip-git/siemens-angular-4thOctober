import { Product } from "./product.model";

export interface IProductService {
    getProducts(): Product[];
}