import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TituloComponent } from './titulo/titulo.component';



@NgModule({
    imports:[
        RouterModule,
        CommonModule
    ],
    declarations: [
       
        HeaderComponent,
        SidebarComponent,
        TituloComponent
        
       
    ],
    exports: [
       
        HeaderComponent,
        SidebarComponent
    ]
})
export class SharedModule { }