import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'rick-morty',
    pathMatch: 'full',
  },
  {
    path: 'rick-morty',
    loadChildren: () =>
      import('./rick-morty/rick-morty.routes').then((mod) => mod.routes),
  },
  {
    path: '**',
    redirectTo: 'rick-morty', // You can specify a default route or 'page-not-found' component here
  },
];
