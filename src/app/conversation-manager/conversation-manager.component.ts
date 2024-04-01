import {Component, inject} from '@angular/core';
import {GlobalConstants} from "../common/global-constants";
import {group} from "@angular/animations";
import {NgForOf, NgIf} from "@angular/common";
import {Group} from "../group";
import {GroupService} from "../group.service";
import {ConversationService} from "../conversation.service";
import {Conversation} from "../conversation";

@Component({
  selector: 'app-conversation-manager',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './conversation-manager.component.html',
  styleUrl: './conversation-manager.component.css'
})
export class ConversationManagerComponent {
  conversations: Conversation[] = []
  groupService: ConversationService = inject(ConversationService)

  constructor() {
    this.getAllConversationsFromActualUser()
  }


  getAllConversationsFromActualUser(){
    this.groupService.getAllConversationsFromActualUser().subscribe({
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
