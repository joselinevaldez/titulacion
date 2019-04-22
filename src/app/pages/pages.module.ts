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

@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        MiembrosComponent,
        ReunionesComponent,
        TitulacionesComponent,
        RegistroComponent,
        SeguimientoComponent
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
        CommonModule,
        RouterModule
        
    ]
})
export class PagesModule { }