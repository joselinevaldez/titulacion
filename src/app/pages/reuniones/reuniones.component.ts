import { Component, OnInit,ViewChild,ViewEncapsulation } from '@angular/core';

import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReunionesService } from '../../services/reuniones.service';
@Component({
  selector: 'app-reuniones',
  templateUrl: './reuniones.component.html',
  styles: []
})
export class ReunionesComponent implements OnInit {
  calendarOptions: Options; 
  fecha:any;
  mesfiltro:any;
  filtro:any='P';
  filterText:any;
  op:any="calendar";
  reunionesForm: FormGroup;
  participantesForm: FormGroup;
  participantes:any[]=[];
  reuniones:any[]=[];
  evento:any[]=[];
  participantesCopia:any[]=[];
   existe:boolean;
   events = null;
  //miembros:any[]=[{id:'1',nombre:'joseline valdez '},{id:'2',nombre:'raul martinez'}]
  seleccion:any;
  miembros:any=[
    {id:'1',nombre:'Joseline Valdez Gastelum',puesto:'secretario',carrera:'Ingenieria de Sofware',correo:'joseline@hotmail.com',telefono:'6682414321',estatus:'1',fecha_alta:'10/04/2019'},
    {id:'2',nombre:'Raul Martinez Valenzuela',puesto:'director',carrera:'Ingenieria de Sofware',correo:'raulmartinez@hotmail.com',telefono:'6871407778',estatus:'0',fecha_alta:'11/03/2019'},
    {id:'3',nombre:'Teresa Galaviz',puesto:'secretario',carrera:'Ingenieria de Sofware',correo:'joseline@hotmail.com',telefono:'6682414321',estatus:'1',fecha_alta:'10/04/2019'},
    {id:'4',nombre:'Guadalupe Gastelum',puesto:'director',carrera:'Ingenieria de Sofware',correo:'raulmartinez@hotmail.com',telefono:'6871407778',estatus:'0',fecha_alta:'11/03/2019'}];

@ViewChild(CalendarComponent) ucCalendar: CalendarComponent;


  constructor(
    private modalService: NgbModal,
    public eventService : ReunionesService
  ) { }

  ngOnInit() {
    
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      events: []
    };
    var f=new Date();
    var m:any = f.getMonth()+1;
    if (m<10) m="0"+m;
    this.mesfiltro=f.getFullYear()+"-"+m;  
    this.loadevents();
    this.reunionesForm= new FormGroup({
      titulo:new FormControl(null, Validators.required),
      fecha:new FormControl("01/01/2019", Validators.required),
      hora:new FormControl(null, Validators.required),
     
      comentarios:new FormControl(null)
    } );
    this.participantesForm= new FormGroup({
     
      participantes:new FormControl(null, Validators.required),
      } );
      
  }
  loadevents() {
      
      this.events = this.eventService.getCitas();
      this.reuniones=this.eventService.getCitas();
     console.log(this.events);
  }
 dia(evento,modal){
  var f=new Date();
  this.reunionesForm.reset();
  this.participantes=[];
  this.seleccion="";
  this.participantesForm.reset();
  if(evento=="1"){
    var dia:any = f.getDate();
    var mes:any = f.getMonth()+1;
    if(dia<10)dia="0"+dia;
    if(mes<10)mes="0"+mes;
    this.fecha=f.getFullYear()+"-"+mes+"-"+dia; 
    }
  else{
    this.fecha=evento.date.format();}
       this.modalService.open(modal,{ size: 'md'});
  
    //console.log(evento.date.format());
  }
  selecP(){
  var p:any = document.getElementById("participantes");
   this.seleccion=p.value;
  if (this.seleccion=="1"){
    this.participantes=this.miembros;
  }else{
    this.participantes=[];
  }
  }
  remover(p){
    this.participantesCopia=this.participantes;
    this.participantes=[];
    for (var i in this.participantesCopia) { 
      if(this.participantesCopia[i].id!=p.id)
      this.participantes.push(this.participantesCopia[i]);
     
    }
   
  }
  guardar(){
    console.log(this.participantes);
    console.log(this.reunionesForm.controls.fecha.valid);
    console.log(this.reunionesForm.controls.hora.valid);
  }
  addparticipantes(p){
    
    this.existe=false
    if(this.participantes.length==0){
      this.participantes.push(p);
    }else{
      for (var i in this.participantes) { 
       if(this.participantes[i].id===p.id)
       this.existe=true;     
      }//for
    if(this.existe === false)
      this.participantes.push(p);
     
    }//else
  }
  cambiar(opc){
    this.op=opc;
    console.log(this.op);
  }
  eventClick(evento,modal){
    this.evento = evento.event;
    this.modalService.open(modal,{ size: 'md'});
   }
   
filtrar(){
    var f:any = document.getElementById("filtrado");
    
      this.filtro=f.value;}
mes(){
    var m:any = document.getElementById("mes");       
    this.mesfiltro=m.value;}
}
