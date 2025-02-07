import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { User } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://dummyjson.com/auth';
  currentUser = signal<User | null | undefined>(undefined);
  token = signal<string | null | undefined>(undefined);
  isAuthenticated = computed(
    () => this.token() !== null && this.token() !== undefined
  );
  isLoading = signal<boolean>(false);
  error = signal<string | null>(null);

  constructor(
    private http: HttpClient,
    private messageServvice: MessageService,
    private router: Router
  ) {}

  saveToken(token: string) {
    localStorage.setItem('token', token);
    this.token.set(token);
  }

  login(username: string, password: string) {
    this.isLoading.set(true);
    this.http
      .post<User>(`${this.apiUrl}/login`, {
        username,
        password,
      })
      .subscribe({
        next: (response) => {
          this.saveToken(response.accessToken);
          this.currentUser.set(response);
          this.router.navigate(['/events']);
        },
        error: ({ error }) => {
          this.messageServvice.add({
            severity: 'error',
            summary: 'Erro',
            detail: error.message,
          });
          this.isLoading.set(false);
        },
        complete: () => {
          this.isLoading.set(false);
        },
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.token.set(null);
  }

  getCurrentUser() {
    this.http.get<User>(`${this.apiUrl}/me`).subscribe({
      next: (response) => {
        this.currentUser.set(response);
      },
      error: ({ error }) => {
        this.messageServvice.add({
          severity: 'error',
          summary: 'Erro',
          detail: error.message,
        });
      },
    });
  }

  getToken() {
    this.token.set(localStorage.getItem('token'));
    return this.token();
  }
}
