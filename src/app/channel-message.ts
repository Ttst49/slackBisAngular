import {UserFull} from "./user-full";

export interface ChannelMessage {
  id: number,
  author: {
    id:number,
    name: string | null,
    lastName: string | null,
    relatedTo: UserFull
  }
  content: string
}
