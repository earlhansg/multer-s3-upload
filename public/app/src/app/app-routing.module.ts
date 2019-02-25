
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './landing/landing.module#LandingModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  }
];


export const AppRouting = RouterModule.forRoot(routes, { useHash: false });

