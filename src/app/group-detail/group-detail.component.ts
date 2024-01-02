import {Component, inject} from '@angular/core';
import {Group} from "../group";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {GroupService} from "../group.service";
import {Message} from "../message";
import {UserFull} from "../user-full";
import {ProfileFull} from "../profile-full";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {GlobalConstants} from "../common/global-constants";
import {FormsModule} from "@angular/forms";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-group-detail',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    FormsModule,
    NgForOf,
    NgClass
  ],
  templateUrl: './group-detail.component.html',
  styleUrl: './group-detail.component.css'
})
export class GroupDetailComponent {

  group !: Group
  route : ActivatedRoute = inject(ActivatedRoute)
  groupService: GroupService = inject(GroupService)
  messageService: MessageService = inject(MessageService)
  messageInput: string = ""


  constructor() {
    if (this.route.snapshot.url[2]){
      let id : number = parseInt(this.route.snapshot.url[2].path)
      this.getOneGroupFromId(id)
    }

  }

  getOneGroupFromId(id:number){
    this.groupService.getOneGroupFromId(id).subscribe({
      next:(groupFromFetch:any)=>{
        console.log(groupFromFetch.groupMembers)
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
