import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Reunion} from '../models/reunion.models';
@Injectable({
  providedIn: 'root'
})
export class ReunionesService {
  reuniones: any[]=[
    {id:"1",title:'uno',comentario:'reunion uno',start:'2019-04-01T14:30',time:'10:00',end:'2019-04-01T14:30:00',color:'lightblue',estatus:'P'},
    {id:"1",title:'dos',comentario:'reunion dos',start:'2019-04-02T11:30',time:'8:00',end:'2019-04-02T11:30',color:'lightblue',estatus:'R'},
    {id:"1",title:'tres',comentario:'reunion tres',start:'2019-04-03T10:00',time:'09:00',end:'2019-04-03T10:00',color:'lightblue',estatus:'C'},
    {id:"1",title:'cuatro',comentario:'reunion cuatro',start:'2019-04-04T09:30',time:'11:00',end:'2019-04-04T09:30',color:'lightblue',estatus:'P'},
 
  ];
  constructor(public http: HttpClient) { }
  getCitas(){
    return this.reuniones;
  }
}




