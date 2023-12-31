import {UserFull} from "./user-full";

export interface Request {
  id: number,
  recipient: UserFull,
  sender: UserFull
}
