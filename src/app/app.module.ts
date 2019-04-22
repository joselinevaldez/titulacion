import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';



import { PagesModule } from './pages/pages.module';
import { PrincipalComponent } from './principal/principal.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  
    LoginComponent,
  
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule ,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
