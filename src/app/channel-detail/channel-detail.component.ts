import {Component, inject} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {Channel} from "../interface/channel";
import {ChannelService} from "../channel.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {routes} from "../app.routes";
import {FormsModule} from "@angular/forms";
import {Message} from "../interface/message";
import {GlobalConstants} from "../common/global-constants";
import {MessageService} from "../message.service";

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
export class ChannelDetailComponent {

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
         ownerId: channelFromFetch.owner.id
      }
      console.log(channelFromFetch)
      }})
  }



  protected readonly GlobalConstants = GlobalConstants;


  protected readonly MessageService = MessageService;
}
