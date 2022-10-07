import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FilterProductPipe } from "./pipes/filter-product.pipe";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
    declarations: [ProductListComponent, FilterProductPipe, FilterComponent],
    imports: [CommonModule],
    providers: [],
    exports: [ProductListComponent],
    bootstrap: []
})
export class ProductsModule {
    constructor() {
        console.log('[PM] created')
    }
}