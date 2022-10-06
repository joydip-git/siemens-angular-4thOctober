import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from './modules/products/products.module';

@NgModule({
  //components, dircetives, pipes
  declarations: [
    AppComponent
  ],
  //modules
  imports: [
    BrowserModule, ProductsModule
  ],
  //services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('[AM] created')
  }
}
