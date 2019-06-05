import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { Miembro } from '../models/miembro.models';
@Injectable({
  providedIn: 'root'
})
export class MiembrosService {

  constructor(
    public http: HttpClient
  ) { }

  nuevo(miembro: Miembro){
    let url = URL_SERVICIOS + '/auth/register';
    return this.http.post( url, miembro )
    .pipe(map( (resp: any) => {

               
                return resp.code;
              }))
              .catch( err => {
                console.log(err);
                   return "404";
              });

   

          

  }
  getMiembro(){
    let url = URL_SERVICIOS + '/auth/members';
    
    return this.http.get( url)
    .pipe(
      map( (resp: any) => {

                //swal('Usuario creado', paciente.email, 'success' );
                ///console.log(resp.usuario);
                console.log(resp.members);
                return resp.members;
              }));
  }
  
}
