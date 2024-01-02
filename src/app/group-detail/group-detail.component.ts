import {Component, inject} from '@angular/core';
import {Group} from "../group";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {GroupService} from "../group.service";
import {Message} from "../message";
import {UserFull} from "../user-full";
import {ProfileFull} from "../profile-full";
import {NgIf} from "@angular/common";
import {GlobalConstants} from "../common/global-constants";

@Component({
  selector: 'app-group-detail',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './group-detail.component.html',
  styleUrl: './group-detail.component.css'
})
export class GroupDetailComponent {

  group !: Group
  route : ActivatedRoute = inject(ActivatedRoute)
  groupService: GroupService = inject(GroupService)

  constructor() {
    if (this.route.snapshot.url[2]){
      let id : number = parseInt(this.route.snapshot.url[2].path)
      this.getOneGroupFromId(id)
    }
  }

  getOneGroupFromId(id:number){
    this.groupService.getOneGroupFromId(id).subscribe({
      next:(groupFromFetch:any)=>{
        return this.group = {
          id: groupFromFetch.id,
          groupMessages: groupFromFetch.groupMessages,
          groupMembers: groupFromFetch.groupMembers,
          adminMembers: groupFromFetch.adminMembers,
          owner: groupFromFetch.owner
        }
      }
    })
  }

  protected readonly GlobalConstants = GlobalConstants;
}
