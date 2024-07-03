import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  public router = inject(Router);
  public productsService = inject(ProductsService);
  public products: Product[] = [];
  public title: string = `Products`;

  protected productForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    count: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    rate: new FormControl('', [Validators.required]),
    categoryName: new FormControl('', [Validators.required]),
    categoryId: new FormControl('', [Validators.required]),
  });

  constructor() {
    console.log('Admin component created');
    this.productsService.getAllProducts().subscribe((products) => {
      this.products = products;
      console.log('products:', this.products);
    });
  }

  onSubmit() {
    console.log('onSubmit');
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      // this.authService
      //   .login({ ...this.loginForm.value, mode: 'api' })
      //   .subscribe({
      //     next: () => {
      //       if (this.authService.isLoggedIn()) {
      //         this.router.navigate(['/user-profile']);
      //       }
      //     },
      //     error: () => {
      //       this.statusLogin = 'Usuario o contraseña incorrectos';
      //     },
      //   });
    }
  }
}
