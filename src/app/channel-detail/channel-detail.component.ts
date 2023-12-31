import {Component, inject} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Channel} from "../channel";
import {ChannelService} from "../channel.service";
import {ActivatedRoute} from "@angular/router";
import {routes} from "../app.routes";

@Component({
  selector: 'app-channel-detail',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './channel-detail.component.html',
  styleUrl: './channel-detail.component.css'
})
export class ChannelDetailComponent {

  channel! : Channel
  channelService: ChannelService = inject(ChannelService)
  route : ActivatedRoute = inject(ActivatedRoute)


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

}
