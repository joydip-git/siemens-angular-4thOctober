import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProductListComponent } from "./components/product-list/product-list.component";

@NgModule({
    declarations: [ProductListComponent],
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