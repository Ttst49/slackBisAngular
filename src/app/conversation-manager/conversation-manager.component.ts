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
        for (let i =0;i<conversationsFromFetch.length;i++){
          let newConversation :Conversation = {
            privateMessages: conversationsFromFetch["privateMessages"]
          }
          this.conversations.push(newConversation)
        }
      }
    })
  }


  protected readonly GlobalConstants = GlobalConstants;
}
