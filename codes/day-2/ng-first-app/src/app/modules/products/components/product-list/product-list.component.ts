import { Component } from "@angular/core";
import { products } from "src/data/products";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    productRecords = products
    filterText = ''
    updateFilterText(newValue: string) {
        this.filterText = newValue
    }
}