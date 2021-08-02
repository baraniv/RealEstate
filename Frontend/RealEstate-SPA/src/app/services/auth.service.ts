import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

// find the login user in the local storage saved users
authUser(user: any){
  let UserArray = [];
  if (localStorage.getItem('Users')) {
    UserArray = JSON.parse(localStorage.getItem('Users') || "");
  }
  return UserArray.find((p: { userName: any; password: any; }) => p.userName === user.userName && p.password === user.password);
}

}
