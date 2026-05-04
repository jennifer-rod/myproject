import { Routes } from '@angular/router';
import {Dog} from './dog/dog';
import {Home} from './home/home';
import {Navbar} from './navbar/navbar';
import {Cats} from './cats/cats'


export const routes: Routes = [

    {path: 'home', component: Home},
    {path: 'dog', component: Dog},
    {path: 'cats', component: Cats},
    {path: 'navbar', component: Navbar},
    {path: '**', redirectTo: ''}

];
