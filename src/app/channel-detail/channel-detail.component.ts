import {AfterContentChecked, AfterViewInit, Component, inject} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {Channel} from "../interface/channel";
import {ChannelService} from "../../service/channel.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {GlobalConstants} from "../common/global-constants";
import {MessageService} from "../../service/message.service";

@Component({
  selector: 'app-channel-detail',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    NgIf,
    NgClass,
    RouterLink
  ],
  templateUrl: './channel-detail.component.html',
  styleUrl: './channel-detail.component.css'
})
export class ChannelDetailComponent{

  channel! : Channel
  channelService: ChannelService = inject(ChannelService)
  route : ActivatedRoute = inject(ActivatedRoute)
  messageInput : string = ""
  messageService: MessageService = inject(MessageService)



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
         ownerId: channelFromFetch.owner.id,
         createdAt: channelFromFetch.createdAt
      }
      }})
  }

  scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }



  protected readonly GlobalConstants = GlobalConstants;


  protected readonly MessageService = MessageService;
}
