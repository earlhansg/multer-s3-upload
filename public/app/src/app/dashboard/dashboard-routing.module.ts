import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './containers/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

export const DashboardRoutingModule = RouterModule.forChild(routes);
