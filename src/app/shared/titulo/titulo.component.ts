import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter ,map} from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {

  titulo: string;
 pagina: string;


 constructor( private router: Router,
              private title: Title,
              private meta: Meta ) {

   this.getDataRoute()
   .subscribe( data => {
     console.log(data);
     this.titulo = data.titulo;
     this.pagina = data.pagina;
     
     this.title.setTitle( this.pagina );

     const metaTag: MetaDefinition = {
       name: 'description',
       content: this.titulo
     };

     this.meta.updateTag( metaTag );


   });

 }

 ngOnInit() {
 }

 getDataRoute() {
   return this.router.events.pipe(

     filter( evento => evento instanceof ActivationEnd ),
     filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null ),
     map( (evento: ActivationEnd ) => evento.snapshot.data )

   );
 }
}
