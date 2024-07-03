import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';

import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = environment.API;
  private httpClient = inject(HttpClient);

  constructor() {
    console.log('Product service created');
  }

  getCategories() {
    return this.httpClient.get<Category[]>(`${this.apiUrl}/categories`);
  }
  getProductsByCategory(category: string) {
    return this.httpClient.get<Product[]>(
      `${this.apiUrl}/products/${category}`
    );
  }
  getAllProducts() {
    return this.httpClient.get<Product[]>(`${this.apiUrl}/products`);
  }
}
