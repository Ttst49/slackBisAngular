import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {Router} from "@angular/router";
import {GlobalConstants} from "./common/global-constants";
import {UserFull} from "./user-full";

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

  getAllUsers(){
    return this.http.get(GlobalConstants.baseUrl+"profile/showAll")
  }


  getOneUser(id: number) {
    return this.http.get(GlobalConstants.baseUrl+`profile/show/${id}`)
  }

  getActualUser(){
    this.http.get(GlobalConstants.baseUrl+"profile/getActual")
      .subscribe({next:(actualUserFromFetch:any)=>{
          GlobalConstants.actualUser = {
          id: actualUserFromFetch.id,
          username: actualUserFromFetch.username,
          profile: {
            id: actualUserFromFetch.profile.id,
            name: actualUserFromFetch.profile.name,
            lastName: actualUserFromFetch.profile.lastName,
            requests: actualUserFromFetch.profile.requests,
            visibility: actualUserFromFetch.profile.visibility,
            relations: actualUserFromFetch.profile.relations
          }
        }
        console.log(GlobalConstants.actualUser)
        }})
  }


  getFriends() {
    return this.http.get(GlobalConstants.baseUrl+"relations/getFriends")
  }

  sendFriendRequest(id:number){
    return this.http.post(GlobalConstants.baseUrl+`request/send/${id}`,id).subscribe(
      {next:(data)=>{
        console.log(data)
        }}
    )
  }

}
