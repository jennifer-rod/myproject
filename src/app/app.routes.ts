import { Routes } from '@angular/router';
import { Dog } from './dog/dog';
import { Home } from './home/home';
import { Cats } from './cats/cats';
import { About } from './about/about';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'dog', component: Dog },
  { path: 'cats', component: Cats },
  { path: 'about', component: About },
  { path: '**', redirectTo: 'home' }
];