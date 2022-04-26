import { Routes } from '@angular/router';

import { HomeOneComponent } from './landing.component';
import { SignUpStudent } from './signupstudent.component';

export const HomeRoutes: Routes = [
  { path: 'LandingPage', component: HomeOneComponent },
  { path: 'SignUp', component: SignUpStudent }
];