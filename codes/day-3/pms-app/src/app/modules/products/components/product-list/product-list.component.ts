import { Component } from "@angular/core";
import { products } from "src/data/products";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    productRecords = products
    searchText = ''
    filterTextReceived(newText: string) {
        this.searchText = newText
    }
}