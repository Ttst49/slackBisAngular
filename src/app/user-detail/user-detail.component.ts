import {Component, inject} from '@angular/core';
import {UserFull} from "../user-full";
import {UserService} from "../user.service";
import {NgForOf, NgIf} from "@angular/common";
import {GlobalConstants} from "../common/global-constants";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Request} from "../request";
import {Channel} from "../channel";
import {ChannelService} from "../channel.service";

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
  channelService : ChannelService = inject(ChannelService)
  route : ActivatedRoute = inject(ActivatedRoute)

  constructor() {
    let id = this.route.snapshot.params["id"]
    if (this.route.snapshot.url.length == 3){
      this.getUsersFromChannel(parseInt(this.route.snapshot.url[2].path))
    }else if (this.route.snapshot.url[1] != null
      && this.route.snapshot.url[1].path == "getFriends"){
      this.getFriends()
    } else if (id){
      this.getOneUser(id)
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
    this.userService.getFriends().subscribe({next:(friendsFromFetch: any)=>{
        for (let i = 0; i < friendsFromFetch.length;i++){
          let newFriend : UserFull ={
            id: friendsFromFetch[i].id,
            username: friendsFromFetch[i].username,
            profile: {
              id: friendsFromFetch[i].profile.id,
              name: friendsFromFetch[i].profile.name,
              lastName: friendsFromFetch[i].profile.lastName,
              requests: friendsFromFetch[i].requests,
              visibility: friendsFromFetch[i].profile.visibility,
              relations: friendsFromFetch[i].profile.relations
            }
          }
          this.users.push(newFriend)
        }
        console.log(this.route.snapshot.url)
      }})
  }


  getUsersFromChannel(id: number){
    this.channelService.getOneChannelById(id).subscribe({next:(userFromChannel: any)=>{
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
              relations: userFromChannel[i].profile.relations
            }
          }
          this.users.push(newFriend)
        }
        console.log(this.route.snapshot.url)
      }})
  }

  sendFriendRequest(id:number){
    this.userService.sendFriendRequest(id)
  }


  protected readonly GlobalConstants = GlobalConstants;
}
