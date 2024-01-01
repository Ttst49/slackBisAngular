import {Component, inject} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {Channel} from "../channel";
import {ChannelService} from "../channel.service";
import {ActivatedRoute} from "@angular/router";
import {routes} from "../app.routes";
import {FormsModule} from "@angular/forms";
import {ChannelMessage} from "../channel-message";
import {GlobalConstants} from "../common/global-constants";
import * as os from "os";

@Component({
  selector: 'app-channel-detail',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    NgIf,
    NgClass
  ],
  templateUrl: './channel-detail.component.html',
  styleUrl: './channel-detail.component.css'
})
export class ChannelDetailComponent {

  channel! : Channel
  channelService: ChannelService = inject(ChannelService)
  route : ActivatedRoute = inject(ActivatedRoute)
  messageInput : string = ""

  constructor() {
    let id = this.route.snapshot.params["id"]
    this.getChannel(id)
  }

  getChannel(id:number){
    this.channelService.getOneChannelById(id).subscribe({next:(channelFromFetch:any)=>{
       this.channel = {
        id: channelFromFetch.id,
        name: channelFromFetch.name,
        channelMessages :channelFromFetch.channelMessages,
        channelMembers :channelFromFetch.channelMembers,
        channelAdminMembers :channelFromFetch.channelAdminMembers,
         ownerId: channelFromFetch.owner.id
      }
      console.log(channelFromFetch)
      }})
  }


  createMessageObject(content: string){
    let messageObject: ChannelMessage = {
      id: 12,
      author: {
        id: 12,
        name: "create",
        lastName: "create",
        relatedTo: GlobalConstants.actualUser
      },
      content: content
    }
    return messageObject
  }

  sendMessage(channelId:number, message : ChannelMessage){
    this.channelService.sendMessageToChannel(channelId,message)
  }

  protected readonly GlobalConstants = GlobalConstants;

  isFromActualUser(message: ChannelMessage) {
    return message.author.relatedTo.username == GlobalConstants.actualUser.username;
  }

  protected readonly os = os;
}
