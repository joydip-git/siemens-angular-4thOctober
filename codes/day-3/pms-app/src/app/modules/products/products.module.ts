import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FilterProductPipe } from "./pipes/filter-product.pipe";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { FilterComponent } from './components/filter/filter.component';
import { StarComponent } from './components/star/star.component';
//import { ProductService } from "./services/product.service";
import { PRODUCT_SERVICE, PRODUCT_SERVICE_CLASS } from "src/constants/app.constants";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { UpdateProductComponent } from "./components/update-product/update-product.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";

const productRoutes: Routes = [
    {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: 'products/add',
        component: AddProductComponent
    },
    {
        path: 'products/:id',
        component: ProductDetailComponent
    },

    {
        path: 'products/update/:id',
        component: UpdateProductComponent
    },
]

@NgModule({
    declarations: [ProductListComponent, FilterProductPipe, FilterComponent, StarComponent, AddProductComponent, UpdateProductComponent, ProductDetailComponent],
    imports: [CommonModule, HttpClientModule, RouterModule.forRoot(productRoutes)],
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