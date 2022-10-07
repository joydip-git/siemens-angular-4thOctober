import { Component, Inject, OnInit } from "@angular/core";
import { PRODUCT_SERVICE } from "src/constants/app.constants";
import { Product } from "../../models/product.model";
import { IProductService } from "../../models/productservice.contract";
import { ProductService } from "../../services/product.service";


@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    //providers: [ProductService]
})
export class ProductListComponent implements OnInit {
    private service: IProductService;
    constructor(@Inject(PRODUCT_SERVICE) _service: IProductService) {
        this.service = _service
    }
    ngOnInit(): void {
        // const service = new ProductService()
        this.productRecords = this.service.getProducts()
    }
    productRecords?: Product[];
    searchText = ''
    filterTextReceived(newText: string) {
        this.searchText = newText
    }
}