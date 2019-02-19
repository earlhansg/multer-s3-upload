import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

export const DashboardRoutingModule = RouterModule.forChild(routes);
