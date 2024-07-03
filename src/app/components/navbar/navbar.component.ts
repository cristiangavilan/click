import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { ProductsService } from '../../services/products.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-navbar',
  host: { '[attr.id]': '"navbar-1"' },
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isActive = false;
  public authService = inject(AuthService);
  public productsService = inject(ProductsService);
  public router = inject(Router);
  public user: User | null = null;
  public categories: Category[] = [];

  constructor() {
    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
    this.productsService.getCategories().subscribe((categories) => {
      this.categories = categories;
      console.log(this.categories);
    });
  }
  toggleActive() {
    this.isActive = !this.isActive;
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
