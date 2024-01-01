import {UserFull} from "./user-full";
import {ChannelMessage} from "./channel-message";
import {ProfileFull} from "./profile-full";

export interface Channel {
  id:number,
  name: string,
  channelMessages : ChannelMessage[]
  channelMembers : ProfileFull[]
  channelAdminMembers : UserFull[]
  ownerId:number
}
