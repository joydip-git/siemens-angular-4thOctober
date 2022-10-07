//import { products } from "../../../../data/products";
import { Product } from "../models/product.model";
import { IAppService } from "../models/productservice.contract";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiResponse } from "../models/api-response.model";
import { environment } from "src/environments/environment";
import { map, Observable } from "rxjs";

// @Injectable({
//     providedIn: 'root'
// })
@Injectable()
export class ProductService implements IAppService<Product> {
    constructor(private http: HttpClient) {

    }
    getRecord(id: number): Observable<ApiResponse<Product>> {
        return this.http.get<ApiResponse<Product>>(`${environment.apiUrl}/${id}`)
    }
    addRecord(obj: Product): Observable<ApiResponse<Product[]>> {
        throw new Error("Method not implemented.");
    }
    updateRecord(obj: Product): Observable<ApiResponse<Product[]>> {
        throw new Error("Method not implemented.");
    }
    deleteRecord(id: number): Observable<ApiResponse<Product[]>> {
        throw new Error("Method not implemented.");
    }
    getRecords(): Observable<ApiResponse<Product[]>> {
        return this.http.get<ApiResponse<Product[]>>(environment.apiUrl)
        //const obs: Observable<any> = this.http.get(environment.apiUrl)
        // return obs.pipe(
        //     map(
        //         function (resp: any) {
        //             return <ApiResponse<Product[]>>resp
        //         }
        //     )
        // )

    }
}