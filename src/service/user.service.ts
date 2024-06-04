import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../app/interface/user";
import {Router} from "@angular/router";
import {GlobalConstants} from "../app/common/global-constants";
import {UserFull} from "../app/interface/user-full";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router:Router) { }


  registerUser(user:User){
    this.http.post(GlobalConstants.baseUrl+"register",user).subscribe({next:(data)=>{
      }})
  }

  loginUser(user:User){
    this.http.post(GlobalConstants.baseUrl+"login_check",user).subscribe({next:(data:any)=>{
        localStorage.setItem("bearerToken",data.token)
        if (data.token){
          
        }
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
          profile: actualUserFromFetch.profile
        }
        console.log("Currently connected")
        }})
  }


  getFriends() {
    let friends:UserFull[]  =[]
    this.http.get(GlobalConstants.baseUrl+"relations/getFriends").subscribe({next:(userFromChannel: any)=>{
        for (let i = 0; i < userFromChannel.length;i++){
          let newFriend : UserFull ={
            id: userFromChannel[i].id,
            username: userFromChannel[i].username,
            profile: {
              id: userFromChannel[i].profile.id,
              name: userFromChannel[i].profile.name,
              lastName: userFromChannel[i].profile.lastName,
              requests: userFromChannel[i].requests,
              visibility: userFromChannel[i].profile.visibility,
              relations: userFromChannel[i].profile.relations,
              relatedTo: userFromChannel[i].relatedTo
            }
          }
          friends.push(newFriend)
          GlobalConstants.actualFriendsAsString.push(newFriend.username)
        }
      }})
    GlobalConstants.actualFriends = friends
    return friends
  }

  isFriend(userUsername: string) {
    return GlobalConstants.actualFriendsAsString.includes(userUsername)
  }

  removeFriend(relationId: number) {
    this.http.delete(GlobalConstants.baseUrl+`relations/remove/${relationId}`).subscribe({
      next:(data)=>{
        console.log(data)
      }
    })
  }

  createConversationFromId(id:number) {
    this.http.post(GlobalConstants.baseUrl+"private/conversation/create/"+id,id).subscribe({
      next:(data)=>{
        console.log(data)
      }
    })
  }
}
