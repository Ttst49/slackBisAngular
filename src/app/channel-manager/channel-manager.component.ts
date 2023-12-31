import {Component, inject} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {GlobalConstants} from "../common/global-constants";
import {ChannelService} from "../channel.service";
import {Channel} from "../channel";
import {RouterLink} from "@angular/router";
import {UserFull} from "../user-full";


@Component({
  selector: 'app-channel-manager',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    RouterLink
  ],
  templateUrl: './channel-manager.component.html',
  styleUrl: './channel-manager.component.css'
})
export class ChannelManagerComponent {

  channelService: ChannelService = inject(ChannelService)
  protected readonly GlobalConstants = GlobalConstants;
  channels : Channel[] = []

  constructor() {
    this.getAllChannels()
  }

  getAllChannels(): any{
    this.channelService.getAllChannels().subscribe({
      next:(channelsFromFetch: any)=>{
        for (let i = 0;i < channelsFromFetch.length;i++){

          let newChannel : Channel = {
            id: channelsFromFetch[i].id,
            name: channelsFromFetch[i].name,
            channelMessages :[],
            channelMembers :[],
            channelAdminMembers :[],
            ownerId: channelsFromFetch[i].owner.id
          }
          this.channels.push(newChannel)
        }
        return this.channels
      }})
  }

}
