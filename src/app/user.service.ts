import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {Router} from "@angular/router";
import {GlobalConstants} from "./common/global-constants";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router:Router) { }


  registerUser(user:User){
    this.http.post(GlobalConstants.baseUrl+"register",user).subscribe({next:(data)=>{
      console.log(data)
        this.router.navigateByUrl("/login").then(r => console.log(r))
      }})
  }

  loginUser(user:User){
    this.http.post(GlobalConstants.baseUrl+"login_check",user).subscribe({next:(data:any)=>{
        localStorage.setItem("bearerToken",data.token)
        this.router.navigateByUrl("/").then(r => console.log(r))
      }})
  }

}
