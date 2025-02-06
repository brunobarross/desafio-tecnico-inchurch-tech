import { Component, computed, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../services/auth.service';
import { ToastModule } from 'primeng/toast';

import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, ToastModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  providers: [AuthService],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  isLoading = computed(() => this.authService.isLoading());
  formLogin!: FormGroup;

  makeLogin(): void {
    this.authService.login(
      this.formLogin.value.username ?? '',
      this.formLogin.value.password ?? ''
    );
  }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
}
