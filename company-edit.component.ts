import { Component, OnInit } from '@angular/core';
// import { AngularFireDatabase, AngularFireAction, AngularFireObject } from 'angularfire2/database';
// import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { DataSnapshot } from '@firebase/database-types';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from "rxjs/observable/of";
import { CompanyModel, CompanyService } from '../company.service';

@Component({
  selector: 'company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {


  company$: Observable<CompanyModel>;
  isNewCompany: boolean;
  companyKey: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private cps: CompanyService) {
  }

  ngOnInit() {
    this.companyKey = this.activatedRoute.snapshot.params['id'];
    this.isNewCompany = this.companyKey === "new";

    if (!this.isNewCompany) {
      this.getCompany(this.companyKey);
    } else {
      this.company$ = this.cps.GetEmptyObservable<CompanyModel>();
    }
  }

  getCompany(companyKey: string) {
    this.company$ = this.cps.getCompanyById(companyKey);
  }

  saveCompnay(company: CompanyModel) {
    this.isNewCompany ? this.cps.saveCompany(company).then(s => {
      console.log("add", s);
    }) : this.cps.updateCompany(company);
  }
  // editCompany(company: CompanyModel) {
  //   this.cps.updateCompany(company);
  // }
  removeCompnay(company: CompanyModel) {
    this.cps.removeCompany(company).then(res => {
      this.router.navigate([`company-list`]);
    });
  }

  // companyObj: Observable<{ key: string; data: any; }>;
  // //companyList: Observable<AngularFireAction<DataSnapshot>>;
  // compnay$: AngularFireObject<{}>;
  // //companyList: { key: any; data: any; };


  // constructor(private afdb: AngularFireDatabase) {
  //   this.compnay$ = this.afdb.object(`Company`);
  //   //this.companyList = this.compnay$.snapshotChanges();

  //   //  .pipe(
  //   //       map(actions => {
  //   //         console.log("map :", actions, actions.payload.val());
  //   //         return { key: actions.key, data: actions.payload.val() }
  //   //         //actions.map(a => ({ key: a.key, ...a.payload.val() }))
  //   //       }))
  //   //     .subscribe(res => {
  //   //       console.log("compnay", res);
  //   //       this.companyList = res;
  //   //     }, err => {
  //   //       console.log("err", err);
  //   //     }, () => {
  //   //       console.log("complete");
  //   //     });

  //   this.companyObj = this.compnay$.snapshotChanges().pipe(
  //     map(actions => {
  //       //console.log("map :", actions, actions.payload.val());
  //       if (actions.key) {
  //         return { key: actions.key, data: actions.payload.val() }
  //       } else {
  //         return { key: "Company", data: {} };
  //       }
  //       //actions.map(a => ({ key: a.key, ...a.payload.val() }))
  //     }));
  // }

  // saveCompnay(company) {
  //   let obj = { "Name": company.Name, "Phone": "123456" };
  //   console.log("save obj", obj);
  //   this.compnay$.set(obj).then(res => {
  //     console.log("save res", res);
  //   }).catch(err => {
  //     console.log("save err", err);
  //   })
  // }

  // editCompany(company) {
  //   let obj = { "Name": company.Name, "Phone": "1234567" };
  //   this.compnay$.update(obj).then(res => {
  //     console.log("update res", res);
  //   }).catch(err => {
  //     console.log("update err", err);
  //   })
  // }

  // removeCompnay() {
  //   this.compnay$.remove().then(res => {
  //     console.log("remove res", res);
  //   }).catch(err => {
  //     console.log("remove err", err);
  //   })
  // }
}
