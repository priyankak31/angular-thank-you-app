import { Routes } from '@angular/router';
import { ThankYouComponent } from './thank-you/thank-you.component';

export const routes: Routes = [
  { path: 'thank-you', component: ThankYouComponent },
  { path: '', redirectTo: '/thank-you', pathMatch: 'full' }
];
