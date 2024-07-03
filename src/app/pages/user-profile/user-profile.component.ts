import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  public auth = inject(AuthService);
  public user: User | null = null;
  constructor() {
    this.auth.user$.subscribe((user) => {
      this.user = user;
      // console.log(this.user);
    });
  }
}
