
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  { path: '', component: LandingComponent }
];

export const AppRouting = RouterModule.forRoot(routes, { useHash: false });
