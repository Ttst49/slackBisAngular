import {Message} from "./message";
import {UserFull} from "./user-full";
import {ProfileFull} from "./profile-full";

export interface Group {
  groupMessages: Message,
  groupMembers: UserFull[]
  adminMembers: ProfileFull[]
  owner: UserFull
}
