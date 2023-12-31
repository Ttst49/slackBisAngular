import {UserFull} from "./user-full";

export interface Channel {
  id:number,
  name: string,
  channelMessages :[]
  channelMembers :[]
  channelAdminMembers :[]
  ownerId:number
}
