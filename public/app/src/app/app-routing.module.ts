
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './landing/app-landing.module#AppLandingModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/app-dashboard.module#AppDashboardModule'
  }
];


export const AppRouting = RouterModule.forRoot(routes, { useHash: false });
