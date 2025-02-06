import { Component, computed, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) {}
  user = computed(() => this.authService.currentUser());
  isAuthenticated = computed(() => this.authService.isAuthenticated());
  makeLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
