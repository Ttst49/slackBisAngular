import {Component, inject} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Group} from "../interface/group";
import {GroupService} from "../group.service";
import {GlobalConstants} from "../common/global-constants";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-group-manager',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './group-manager.component.html',
  styleUrl: './group-manager.component.css'
})
export class GroupManagerComponent {

  groups: Group[] = []
  groupService: GroupService = inject(GroupService)

  constructor() {
    this.getAllGroupsFromActualUser()
  }


  getAllGroupsFromActualUser(){
    this.groupService.getAllGroupsFromActualUser().subscribe({
      next:(groupsFromFetch: any)=>{
        for (let i =0;i<groupsFromFetch.length;i++){
          let newGroup :Group = {
            id: groupsFromFetch[i].id,
            groupMessages: groupsFromFetch[i].groupMessages,
            groupMembers: groupsFromFetch[i].groupMembers,
            adminMembers: groupsFromFetch[i].adminMembers,
            owner: groupsFromFetch[i].owner
          }
          this.groups.push(newGroup)
        }
      }
    })
  }


  protected readonly GlobalConstants = GlobalConstants;

}
