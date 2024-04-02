import {Component, inject} from '@angular/core';
import {GlobalConstants} from "../common/global-constants";
import {NgForOf, NgIf} from "@angular/common";
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
  conversationService: ConversationService = inject(ConversationService)

  constructor() {
    this.getAllConversationsFromActualUser()
  }


  getAllConversationsFromActualUser(){
    this.conversationService.getAllConversationsFromActualUser().subscribe({
      next:(conversationsFromFetch: any)=>{
        console.log(conversationsFromFetch[0])
        for (let i =0;i<conversationsFromFetch.length;i++){
          let newConversation :Conversation = {
            id:conversationsFromFetch["id"],
            privateMessages: conversationsFromFetch["privateMessages"],
            relatedToProfileA: conversationsFromFetch["relatedToProfileA"],
            relatedToProfileB: conversationsFromFetch["relatedToProfileB"]
          }
          console.log(this.conversations)
          this.conversations.push(newConversation)
        }
      }
    })
  }


  protected readonly GlobalConstants = GlobalConstants;
}
