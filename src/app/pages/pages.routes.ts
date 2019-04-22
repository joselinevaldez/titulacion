import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ReunionesComponent } from './reuniones/reuniones.component';
import { RegistroComponent } from './registro/registro.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { TitulacionesComponent } from './titulaciones/titulaciones.component';
import { MiembrosComponent } from './miembros/miembros.component';
const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
           //RUTAS NUTRIOLOGO
            
              { path: 'home', component: HomeComponent,data:{pagina:'Inicio',titulo :'Titulacion FIM'}},
              { path: 'titulacion', component: TitulacionesComponent,data:{pagina:'Titulacion',titulo :'Opciones de titulacion'}},
              { path: 'seguimiento', component: SeguimientoComponent, data:{pagina:'Seguimiento',titulo :'Seguimiento de estudiantes'}},
              { path: 'registro', component: RegistroComponent, data:{pagina:'Registro',titulo :'Registro de estudiantes'}},
              { path: 'reuniones', component: ReunionesComponent, data:{pagina:'Reuniones',titulo :'Calendario de reuniones'}},
              { path: 'miembros', component: MiembrosComponent , data:{pagina:'Miembro',titulo :'Catalogo de miembros'}},
              //extras
          
          

            { path: '', redirectTo: '/home', pathMatch: 'full' }
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
