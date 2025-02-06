import { Routes } from '@angular/router';
import { EventsComponent } from './pages/events/events.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { blockLoginGuardGuard } from './guards/block-login-guard.guard';
import { LayoutBaseComponent } from './layouts/layout-base/layout-base.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [blockLoginGuardGuard],
  },
  {
    path: '',
    component: LayoutBaseComponent,
    children: [
      {
        path: 'events',
        title: 'Eventos',
        component: EventsComponent,
        canActivate: [authGuard],
      },
    ],
  },
  {
    path: '*',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
