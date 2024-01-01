import {UserFull} from "./user-full";
import {ChannelMessage} from "./channel-message";

export interface Channel {
  id:number,
  name: string,
  channelMessages : ChannelMessage[]
  channelMembers : UserFull[]
  channelAdminMembers : UserFull[]
  ownerId:number
}
