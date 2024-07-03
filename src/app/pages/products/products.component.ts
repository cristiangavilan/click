import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  computadoras: Product[] = [];
  auriculares: Product[] = [];
  accesorios: Product[] = [];
  monitores: Product[] = [];
  constructor(private productsService: ProductsService) {
    console.log('Products component created');
    // this.productsService
    //   .getProductsByCategory('Computadoras')
    //   .subscribe((res) => {
    //     for (let i = 0; i < res.length && this.computadoras.length < 10; i++) {
    //       if (res[i].sku != '') {
    //         this.computadoras.push(res[i]);
    //       }
    //     }
    //     console.log(this.computadoras);
    //   });
    // this.productsService
    //   .getProductsByCategory('Auriculares')
    //   .subscribe((res) => {
    //     for (let i = 0; i < res.length && this.auriculares.length < 10; i++) {
    //       if (res[i].sku != '') {
    //         this.auriculares.push(res[i]);
    //       }
    //     }
    //     console.log(this.auriculares);
    //   });
    // this.productsService
    //   .getProductsByCategory('Accesorios')
    //   .subscribe((res) => {
    //     for (let i = 0; i < res.length && this.accesorios.length < 10; i++) {
    //       if (res[i].sku != '') {
    //         this.accesorios.push(res[i]);
    //       }
    //     }
    //     console.log(this.accesorios);
    //   });
    // this.productsService.getProductsByCategory('Monitores').subscribe((res) => {
    //   for (let i = 0; i < res.length && this.monitores.length < 10; i++) {
    //     if (res[i].sku != '') {
    //       this.monitores.push(res[i]);
    //     }
    //   }
    //   console.log(this.monitores);
    // });
  }
}
