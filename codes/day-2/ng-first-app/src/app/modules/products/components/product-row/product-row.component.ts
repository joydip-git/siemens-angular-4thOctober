import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-product-row',
    templateUrl: './product-row.component.html',
    styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent {
    @Input() products: any[] = [];
}