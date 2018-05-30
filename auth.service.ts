import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { User } from "@firebase/auth-types";

@Injectable()
export class AuthService {

    user$: Observable<User>;
    constructor(private router : Router, private afAuth: AngularFireAuth){
        this.user$ = this.afAuth.authState;
    }

    loginUser(){
        this.afAuth.auth.signInAnonymously()
        .then(res =>{
            console.log("login success",res);
            this.router.navigate([`company-list`]);
        })
        .catch(err=>{
            console.log("login err",err);
        });
    }
    logoutUser(){
        this.afAuth.auth.signOut();
        this.router.navigate([`home`]);
    }
}