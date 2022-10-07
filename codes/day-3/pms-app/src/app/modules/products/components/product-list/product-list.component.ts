import { Component, Inject, OnInit } from "@angular/core";
import { PRODUCT_SERVICE } from "src/constants/app.constants";
import { ApiResponse } from "../../models/api-response.model";
import { Product } from "../../models/product.model";
import { IAppService } from "../../models/productservice.contract";
import { ProductService } from "../../services/product.service";


@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    //providers: [ProductService]
})
export class ProductListComponent implements OnInit {

    private service: IAppService<Product>;

    loading = true
    errorMessage = ''
    productRecords?: Product[];

    searchText = ''

    constructor(@Inject(PRODUCT_SERVICE) _service: IAppService<Product>) {
        this.service = _service
    }
    ngOnInit(): void {
        // const service = new ProductService()
        // this.productRecords = this.service.getProducts()
        this.service
            .getRecords()
            .subscribe({
                next: (resp: ApiResponse<Product[]>) => {
                    if (resp.data !== null && resp.data) {
                        this.productRecords = resp.data
                        this.loading = false
                        this.errorMessage = ''
                    } else {
                        this.productRecords = undefined
                        this.loading = false
                        this.errorMessage = resp.message
                    }
                },
                error: (err) => {
                    this.productRecords = undefined
                    this.loading = false
                    this.errorMessage = err.message
                },
                complete: () => { }
            })
    }

    filterTextReceived(newText: string) {
        this.searchText = newText
    }
}