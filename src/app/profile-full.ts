import {UserFull} from "./user-full";

export interface ProfileFull {
  id: number
  lastName: string
  name: string
  relatedTo: UserFull
}
