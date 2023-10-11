import { Routes } from '@angular/router';
import { CharacterListPageComponent } from './pages/character/character-list-page/character-list-page.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationListPageComponent } from './pages/location/location-list-page/location-list-page.component';
import { EpisodeListPageComponent } from './pages/episode/episode-list-page/episode-list-page.component';
import { CharacterViewPageComponent } from './pages/character/character-view-page/character-view-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'character',
    component: CharacterListPageComponent,
  },
  {
    path: 'character/:id',
    component: CharacterViewPageComponent,
  },
  {
    path: 'location',
    component: LocationListPageComponent
  },
  { path: 'episode',
   component: EpisodeListPageComponent
  },
];
