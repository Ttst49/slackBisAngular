import {Component, inject} from '@angular/core';
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {GlobalConstants} from "../common/global-constants";
import {ChannelService} from "../channel.service";
import {Channel} from "../interface/channel";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-channel-manager',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    RouterLink,
    DatePipe
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
            channelMessages : channelsFromFetch[i].channelMessages,
            channelMembers : channelsFromFetch[i].channelMembers,
            channelAdminMembers :channelsFromFetch[i].adminChannelMembers,
            ownerId: channelsFromFetch[i].owner.id,
            createdAt: channelsFromFetch[i].createdAt,
          }
          this.channels.push(newChannel)
        }
        return this.channels
      }})
  }


  isActualUserMember(channel: Channel){
    for (let i = 0;i<channel.channelMembers.length;i++){
      if (channel.channelMembers[i].relatedTo.username == GlobalConstants.actualUser.username){
        return true
      }
    }
    return false
  }



}
