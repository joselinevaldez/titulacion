import { RouterModule, Routes } from '@angular/router';



import { LoginComponent } from './login/login.component';
import {PrincipalComponent} from './principal/principal.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'comision', component: PrincipalComponent },
   
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );