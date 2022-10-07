import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FilterProductPipe } from "./pipes/filter-product.pipe";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { FilterComponent } from './components/filter/filter.component';
import { StarComponent } from './components/star/star.component';
//import { ProductService } from "./services/product.service";
import { PRODUCT_SERVICE, PRODUCT_SERVICE_CLASS } from "src/constants/app.constants";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [ProductListComponent, FilterProductPipe, FilterComponent, StarComponent],
    imports: [CommonModule, HttpClientModule],
    //providers: [ProductService],
    providers: [
        {
            provide: PRODUCT_SERVICE,
            useClass: PRODUCT_SERVICE_CLASS
        }
    ],
    exports: [ProductListComponent],
    bootstrap: []
})
export class ProductsModule {
    constructor() {
        console.log('[PM] created')
    }
}