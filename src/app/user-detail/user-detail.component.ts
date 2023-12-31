import {Component, inject} from '@angular/core';
import {UserFull} from "../user-full";
import {UserService} from "../user.service";
import {NgForOf, NgIf} from "@angular/common";
import {GlobalConstants} from "../common/global-constants";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Request} from "../request";

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {

  users : UserFull[] = []
  userService : UserService = inject(UserService)
  route : ActivatedRoute = inject(ActivatedRoute)

  constructor() {
    let id = this.route.snapshot.params["id"]
    if (id){
      this.getOneUser(id)
    }else if (this.route.snapshot.url[1] != null
      && this.route.snapshot.url[1].path == "getFriends"){
      this.getFriends()
    }else{
      this.getAllUsers()
    }

  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe({next:(usersFromFetch: any)=>{
      for (let i = 0; i < usersFromFetch.length;i++){
        let newUser : UserFull ={
          id: usersFromFetch[i].id,
          username: usersFromFetch[i].username,
          profile: {
            id: usersFromFetch[i].profile.id,
            name: usersFromFetch[i].profile.name,
            lastName: usersFromFetch[i].profile.lastName,
            requests: usersFromFetch[i].requests,
            visibility: usersFromFetch[i].profile.visibility,
            relations: usersFromFetch[i].profile.relations
          }
        }
        this.users.push(newUser)
      }
        console.log(this.route.snapshot.url)
      }})
  }

  getOneUser(id:number){
    this.userService.getOneUser(id).subscribe({next:(userFromFetch: any)=>{
      let newUser: UserFull= {
        id: userFromFetch.id,
        username: userFromFetch.username,
        profile: {
          id: userFromFetch.profile.id,
          name: userFromFetch.profile.name,
          lastName: userFromFetch.profile.lastName,
          requests: userFromFetch.requests,
          visibility: userFromFetch.profile.visibility,
          relations: userFromFetch.profile.relations,
        }
      }
      this.users.push(newUser)
      }})
  }

  getFriends(){
    this.userService.getFriends().subscribe({next:(userFromFetch: any)=>{
        let newUser: UserFull= {
          id: userFromFetch.id,
          username: userFromFetch.username,
          profile: {
            id: userFromFetch.profile.id,
            name: userFromFetch.profile.name,
            lastName: userFromFetch.profile.lastName,
            requests: userFromFetch.requests,
            visibility: userFromFetch.profile.visibility,
            relations: userFromFetch.profile.relations,
          }
        }
        this.users.push(newUser)
      }})
  }

  sendFriendRequest(id:number){
    this.userService.sendFriendRequest(id)
  }


  protected readonly GlobalConstants = GlobalConstants;
}
