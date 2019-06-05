import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CommonModule }from '@angular/common' ;
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PAGES_ROUTES } from './pages.routes';
import { FullCalendarModule } from 'ng-fullcalendar';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { MiembrosComponent } from './miembros/miembros.component';
import { ReunionesComponent } from './reuniones/reuniones.component';
import { TitulacionesComponent } from './titulaciones/titulaciones.component';
import { RegistroComponent } from './registro/registro.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http';
import { FiltroPipe} from '../pipes/filtro.pipe';
import { FechaPipe} from '../pipes/fecha.pipe';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        MiembrosComponent,
        ReunionesComponent,
        TitulacionesComponent,
        RegistroComponent,
        SeguimientoComponent,
        FiltroPipe,
        FechaPipe
    ],
    exports: [
        
    ],
    imports: [
        SharedModule,
        FormsModule,
       
        ReactiveFormsModule,
        PAGES_ROUTES ,
        FullCalendarModule ,
        NgbModule,
        NgxPaginationModule,
        CommonModule,
        RouterModule,
        HttpClientModule
        
    ]
})
export class PagesModule { }