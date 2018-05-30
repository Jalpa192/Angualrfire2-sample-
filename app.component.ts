import { AuthService } from './Auth/auth.service';
import { Component } from '@angular/core';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { map as fmap } from '@firebase/util';

import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public authService: AuthService) {

  }

  // constructor(private afdb: AngularFireDatabase) {

  // const con = this.afdb.object(`Connected`).snapshotChanges();
  // con.pipe(
  //   map(actions => {
  //     console.log("map :", actions,actions.payload.val());
  //     return { key : actions.key, data : actions.payload.val()}
  //      //actions.map(a => ({ key: a.key, ...a.payload.val() }))
  //   })
  // ).subscribe(res => {
  //   console.log("res", res);
  // }, err => {
  //   console.log("err", err);
  // }, () => {
  //   console.log("complete");
  // })


  // this.afdb.list('items').snapshotChanges().pipe(
  //   map(actions =>
  //     actions.map(a => ({ key: a.key, ...a.payload.val() }))
  //   )
  // ).subscribe(items => {
  //   return items.map(item => item.key);
  // });
  // }
}
