import {Component, inject} from '@angular/core';
import {Channel} from "../channel";
import {FormsModule} from "@angular/forms";
import {ChannelService} from "../channel.service";

@Component({
  selector: 'app-channel-creation',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './channel-creation.component.html',
  styleUrl: './channel-creation.component.css'
})
export class ChannelCreationComponent {

  channelName! : string
  channelService: ChannelService = inject(ChannelService)

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  createChannelObject(channelName: string){
    let newChannelObject:Channel = {
      id:this.getRandomInt(100000000),
      name: channelName,
      channelMessages :[],
      channelMembers :[],
      channelAdminMembers :[]
    }
    return newChannelObject
  }

  createChannel(channel : Channel){
    this.channelService.createChannel(channel)
  }

}
