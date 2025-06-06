import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { Contacto } from './pages/contacto/contacto';
import { Login } from './auth/login/login';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home ,
    children: [ 
      {path: 'about', component: About},
      {path: 'contact', component: Contacto} ]
     },
  {path: 'login', component:Login}
    
];
