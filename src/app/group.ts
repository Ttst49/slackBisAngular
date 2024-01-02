import {Message} from "./message";
import {UserFull} from "./user-full";
import {ProfileFull} from "./profile-full";

export interface Group {
  id:number
  groupMessages: Message[]
  groupMembers: UserFull[]
  adminMembers: ProfileFull[]
  owner: ProfileFull
}
