import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage) },
  { path: 'solutions', loadComponent: () => import('./pages/solutions/solutions.page').then(m => m.SolutionsPage) },
  { path: 'fleet', loadComponent: () => import('./pages/fleet/fleet.page').then(m => m.FleetPage) },
  { path: 'industries', loadComponent: () => import('./pages/industries/industries.page').then(m => m.IndustriesPage) },
  { path: 'about', loadComponent: () => import('./pages/about/about.page').then(m => m.AboutPage) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.page').then(m => m.ContactPage) },
  { path: '**', redirectTo: '' }
];
