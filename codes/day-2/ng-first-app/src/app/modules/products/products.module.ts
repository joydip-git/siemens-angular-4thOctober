import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProductHeaderRowComponent } from "./components/product-header-row/product-hearder-row.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductRowComponent } from "./components/product-row/product-row.component";
import { FilterProductPipe } from "./pipes/filter-product.pipe";

@NgModule({
    declarations: [ProductListComponent, ProductRowComponent, ProductHeaderRowComponent, FilterProductPipe],
    imports: [CommonModule],
    providers: [],
    //a subset of declarations+imports (component, directive, pipe and module)
    exports: [ProductListComponent],
    bootstrap: []
})
export class ProductsModule {
    constructor() {
        console.log('[PM] created')
    }
}