import { Component, inject } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-by-category',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './products-by-category.component.html',
  styleUrl: './products-by-category.component.scss',
})
export class ProductsByCategoryComponent {
  public router = inject(Router);
  public route = inject(ActivatedRoute);
  public productsService = inject(ProductsService);
  public products: Product[] = [];
  public categoryId: string = '1';
  public title: string = `Products by category ${this.categoryId}`;
  constructor() {
    this.route.paramMap.subscribe((params) => {
      console.log(params.get('id'));
      this.categoryId = params.get('id') || '1';
      this.productsService
        .getProductsByCategory(this.categoryId || '1')
        .subscribe((products) => {
          this.title = `Products by category ${products[0].categoryName}`;
          this.products = products;
          console.log(this.products);
        });
    });
  }
}
