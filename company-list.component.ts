import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireAction } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { DataSnapshot } from '@firebase/database-types';
import { CompanyModel, CompanyService } from '../company.service';

@Component({
  selector: 'company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  CompanyList$: Observable<CompanyModel[]>;
    constructor(private cps :CompanyService) { 
  }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(){
   this.CompanyList$ = this.cps.getCompanies();
  }

}
