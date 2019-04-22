import { Component, OnInit ,ViewChild ,ViewEncapsulation} from '@angular/core';
import { NgModule } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FormGroup,FormControl,Validators, NgForm}from '@angular/forms';
import { resetApplicationState } from '@angular/core/src/render3/instructions';
@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class MiembrosComponent implements OnInit {
  miembrosForm: FormGroup;
  usuarioForm: FormGroup;
  press:boolean;
  guardado:boolean;
  siguiente:boolean ;
  roles:any=['Administrador','miembro'];
  puestos:any=['director','secretario','tesorero'];
  carreras:any=['Ingenieria de Sofware','Ingenieria civil','Ingenieria geodesica','Ingenieria en procesos industriales'];
  constructor(
    private modalService: NgbModal
  ) {
  
   }
  
  ngOnInit() {
    this.press=false;
    this.siguiente=false;
    this.guardado=false;
    this.miembrosForm= new FormGroup({
      nombre: new FormControl(null,Validators.required),
      puesto: new FormControl(null,Validators.required),
      carrera: new FormControl(null,Validators.required),
    
      telefono:new FormControl(null, Validators.compose([
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
  guardar(){
    this.guardado=true;
      console.log(this.miembrosForm.value);
      console.log(this.usuarioForm.value);
    
  }
}
