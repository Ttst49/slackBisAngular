import {Component, inject} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {UserFull} from "../user-full";
import {UserService} from "../user.service";
import {FormsModule} from "@angular/forms";
import {GroupService} from "../group.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-group-creation',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    FormsModule
  ],
  templateUrl: './group-creation.component.html',
  styleUrl: './group-creation.component.css'
})
export class GroupCreationComponent {

  friends : UserFull[] = []
  userService: UserService = inject(UserService)
  all_selected_values: number[] = [];
  groupService: GroupService = inject(GroupService)
  router: Router = inject(Router)

  constructor() {
    this.getFriends()
  }


  onChange(value: number): void {
    if (this.all_selected_values.includes(value)) {
      this.all_selected_values = this.all_selected_values.filter((item) => item !== value);
    } else {
      this.all_selected_values.push(value);
    }
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
          this.friends.push(newFriend)
        }
      }})
  }

  createGroup(selected_values: number[]){
    this.groupService.createGroup(selected_values).subscribe({
      next:(data)=>{
        console.log(data)
        this.router.navigateByUrl("/groups")
      }
    })
  }

}
