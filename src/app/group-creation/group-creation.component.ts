import {Component, inject} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {UserFull} from "../interface/user-full";
import {UserService} from "../../service/user.service";
import {FormsModule} from "@angular/forms";
import {GroupService} from "../../service/group.service";
import {Router} from "@angular/router";
import {GlobalConstants} from "../common/global-constants";

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
    this.userService.getFriends()
    this.friends = GlobalConstants.actualFriends
  }

  createGroup(selected_values: number[]){
    this.groupService.createGroup(selected_values).subscribe({
      next:(data)=>{
        console.log(data)
        this.router.navigateByUrl("/groups")
      }
    })
  }

  protected readonly GlobalConstants = GlobalConstants;
}
