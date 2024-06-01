import {inject, Injectable} from '@angular/core';
import {Message} from "./interface/message";
import {GlobalConstants} from "./common/global-constants";
import {ChannelService} from "./channel.service";
import {GroupService} from "./group.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  channelService: ChannelService = inject(ChannelService)
  groupService: GroupService = inject(GroupService)

  constructor() { }


  isFromActualUser(message: Message) {
    return message.author.relatedTo.username == GlobalConstants.actualUser.username;
  }

  createMessageObject(content: string){
    let messageObject: Message = {
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

  sendMessageIntoChannel(channelId:number, message : Message){
    this.channelService.sendMessage(channelId,message)
  }


  sendMessageIntoGroup(groupId:number, message: Message){
    this.groupService.sendMessage(groupId,message)
  }
}
