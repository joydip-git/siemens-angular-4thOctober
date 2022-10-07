import { products } from "../../../../data/products";
import { Product } from "../models/product.model";
import { IProductService } from "../models/productservice.contract";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

// @Injectable({
//     providedIn: 'root'
// })
@Injectable()
export class ProductService implements IProductService {
    constructor(private http: HttpClient) {

    }
    getProducts(): Product[] {
        return products
    }
}