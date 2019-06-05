import { Component, OnInit } from '@angular/core';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-titulaciones',
  templateUrl: './titulaciones.component.html',
  styles: [],
  providers: [NgbPaginationConfig]
})
export class TitulacionesComponent implements OnInit {

  studentsList:any[];
  totalItems: number;
  page: number;
  previousPage: number;
  showPagination: boolean;

  constructor(
    private route: ActivatedRoute,
    private config: NgbPaginationConfig,
    private router: Router) {
      this.config.boundaryLinks = true;
  }

  ngOnInit() {
	this.page =1;
	this.previousPage =1;
    //this.fillStudents();
  }

}
