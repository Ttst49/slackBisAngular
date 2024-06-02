import {Component, Inject, inject} from '@angular/core';
import {Group} from "../interface/group";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {GroupService} from "../../service/group.service";
import {DOCUMENT, NgClass, NgForOf, NgIf} from "@angular/common";
import {GlobalConstants} from "../common/global-constants";
import {FormsModule} from "@angular/forms";
import {MessageService} from "../../service/message.service";

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
  previousLength: number = 0
  router: Router = inject(Router)


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

  checkGroupMessageLength(previousLength: number= this.previousLength) {
    if (this.group.groupMessages.length > previousLength){
      this.previousLength = this.group.groupMessages.length
      console.log(this.previousLength)
      return setTimeout(()=>{window.location.reload()},1000)
    }else {
      return false
    }
  }


}

