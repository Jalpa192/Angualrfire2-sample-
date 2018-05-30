import { CompanyModel } from './company.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireAction, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable, observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DataSnapshot } from '@firebase/database-types';

@Injectable()
export class CompanyService {

  private dbObjName: string = 'Companies';
  companies$: AngularFireList<CompanyModel>;
  //compnay$: AngularFireObject<CompanyModel>;

  constructor(private afdb: AngularFireDatabase) {
    //this.compnay$ = this.afdb.object(`Company`);
    this.companies$ = this.afdb.list(this.dbObjName);
  }

  getCompanies(): Observable<CompanyModel[]> {
    return this.companies$.snapshotChanges().pipe(
      map(res => {
        return res.map(a => {
          let data : any = a.payload.toJSON();
          // console.log("data",a.key,data);         
          return {
            $key: a.key,
            name: data.name,
            phone: data.phone
          };
        });
      })
    );
    // .subscribe(s=>{
    //   console.log("list",s);
    // })

    //with out key - return data
    // return this.companies$.valueChanges()

    // .pipe(
    //   map(actions => { 

    //     console.log("map :", actions);
    //     return actions
    //     // if (actions.keys) {
    //     //   return { key: actions.keys, data: actions.values}
    //     // } else {
    //     //   return { key: "Company", data: {} };
    //     // }
    //     //actions.map(a => ({ key: a.key, ...a.payload.val() }))
    //   }));
  }

  GetEmptyObservable<T>() : Observable<T> {
    return new Observable<T>(observer => {
      setTimeout(() => {
         // console.log("empty");
          return observer.next({} as T) ;
      }, 1000);
    });
  }

  getCompanyById(companyKey: string): Observable<CompanyModel> {
    return this.afdb.object<CompanyModel>(`${this.dbObjName}/${companyKey}`)
      .valueChanges()
      .pipe(
        map(actions => {
          console.log("CompanyModel", actions);
          actions.$key = companyKey;
          return actions;
        })
      );
  }
  saveCompany(company: CompanyModel) {
    return this.companies$.push(company).then(res => {
      console.log("push company success", res,res.key);
      return res;
    }, err => {
      console.log("push company error", err);
    });
  }
  updateCompany(company: CompanyModel) {
    const $key = company.$key
    delete company.$key
    return this.companies$.update($key, company).then(res => {
      console.log("update company success", res);
    }).catch(err => {
      console.log("update company error", err);
    });
  }
  removeCompany(company: CompanyModel) {
    return this.companies$.remove(company.$key).then(res => {
      console.log("remove company success", res);
    }).catch(err => {
      console.log("remove company error", err);
    });
  }
}

export interface CompanyModel {
  $key: string;
  name: string;
  phone: string;
}
