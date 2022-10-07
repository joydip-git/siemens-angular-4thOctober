import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { PRODUCT_SERVICE } from 'src/constants/app.constants';
import { ApiResponse } from '../../models/api-response.model';
import { Product } from '../../models/product.model';
import { IAppService } from '../../models/productservice.contract';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product?: Product;
  loading = true
  errorMessage = ''

  constructor(private route: ActivatedRoute, @Inject(PRODUCT_SERVICE) private service: IAppService<Product>, private router: Router) { }

  goBack() {
    this.router.navigate(['/products'])
  }

  ngOnInit(): void {
    const snapshot: ActivatedRouteSnapshot = this.route.snapshot
    console.log(snapshot.params)
    if (snapshot.params['id']) {
      const id = Number(snapshot.params['id'])
      this.service.getRecord(id).subscribe({
        next: (resp: ApiResponse<Product>) => {
          if (resp.data !== null && resp.data) {
            this.product = resp.data
            this.loading = false
            this.errorMessage = ''
          } else {
            this.product = undefined
            this.loading = false
            this.errorMessage = resp.message
          }
        },
        error: (err) => {
          this.product = undefined
          this.loading = false
          this.errorMessage = err.message
        },
        complete: () => {

        }
      })
    }
  }
}
