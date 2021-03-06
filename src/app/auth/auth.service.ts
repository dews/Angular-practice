import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

    constructor(private router: Router) {

    }

    signupUser(email: string, password: string) {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => {console.error(error); return error; });
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                this.router.navigate(['/']);
                console.log(response);
            })
            .catch(error => console.error(error));
    }

    logout() {
        firebase.auth().signOut();
    }

    getToken() {
        return firebase.auth().currentUser.getIdToken();
    }

    isAuthenticated() {
        return firebase.auth().currentUser != null;
    }
}
