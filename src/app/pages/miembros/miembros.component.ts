import { Component, OnInit ,ViewEncapsulation} from '@angular/core';

import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Miembro} from '../../models/miembro.models';
import {FormGroup,FormControl,Validators, NgForm}from '@angular/forms';
import { MiembrosService } from '../../services/miembros.service';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: []
})
export class MiembrosComponent implements OnInit {
  miembrosForm: FormGroup;
  filterText:any;
  filtro:any='A';
  nuevoMiembro:Miembro = new Miembro();
  usuarioForm: FormGroup;
  press:boolean;
  pageActual:number=1;
  guardado:any;
  editado:boolean;
  siguiente:boolean ;
  roles:any=['Administrador','miembro'];
  miembroeditar:any[]=[];
  miembros:any=[];
  puestos:any=['director','secretario','tesorero'];
  carreras:any=['Ingenieria de Sofware','Ingenieria civil','Ingenieria geodesica','Ingenieria en procesos industriales'];
  constructor(
    private modalService: NgbModal,
    private _miembrosService : MiembrosService
  ) {
  
   }
  
  ngOnInit() {
    this.cargar();
    this.press=false;
    this.siguiente=false;
    this.guardado='';

    this.editado=false;
    this.miembrosForm= new FormGroup({
      nombre: new FormControl('',Validators.required),
      puesto: new FormControl('',Validators.required),
      carrera: new FormControl('',Validators.required),
    
      telefono:new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('[0-9]{10}')
        
      ])),
    
      correo:new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}')
      ]))} );
    this.usuarioForm= new FormGroup({
        usuario: new FormControl(null,Validators.required),
        rol: new FormControl(null,Validators.required),
        password:new FormControl(null, Validators.required),
        password2:new FormControl(null, Validators.required),
      },   { validators: this.sonIguales( 'password', 'password2' ) } );
      
    
  }
  cargar(){
    this._miembrosService.getMiembro()
     .subscribe(resp=>{
       //alert(resp);
       this.miembros = resp;
      
     });
  }
  sonIguales( campo1: string, campo2: string ) {

    return ( group: FormGroup ) => {

      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if ( pass1 === pass2 ) {
        return null;
      }

      return {
        sonIguales: true
      };

    };
  }
  open(content) {
      this.miembrosForm.reset();
      this.usuarioForm.reset();
      this.modalService.open(content, { size: 'md' });
      
  }
  edit(miembro,modal){
    this.miembrosForm.reset();
    this.miembroeditar =miembro;
    this.modalService.open(modal, { size: 'md' });
 
  }
  guardar(){
    
     this.nuevoMiembro.nombre=this.miembrosForm.controls.nombre.value;
     this.nuevoMiembro.puesto=this.miembrosForm.controls.puesto.value;
     this.nuevoMiembro.carrera=this.miembrosForm.controls.carrera.value;
     this.nuevoMiembro.correo=this.miembrosForm.controls.correo.value;
     this.nuevoMiembro.telefono=this.miembrosForm.controls.telefono.value;
     this.nuevoMiembro.usuario=this.usuarioForm.controls.usuario.value;
     this.nuevoMiembro.password=this.usuarioForm.controls.password.value;
     this.nuevoMiembro.role=this.usuarioForm.controls.rol.value;
     this._miembrosService.nuevo(this.nuevoMiembro)
     .subscribe(resp=>{
       //alert(resp);
       if(resp=='200'){
        this.guardado='si';
       }else {
         this.guardado='no';
       }
      console.log(resp);
     });
     // console.log(this.miembrosForm.value);
     // console.log(this.usuarioForm.value);
    
  }
  guardarCambios(){
    this.editado=true;
    
      console.log(this.miembrosForm.value);
    
  }
  filtrar(){
    var f:any = document.getElementById("filtrado");
    
      this.filtro=f.value;
    
   
    console.log("entro");
  }
}
