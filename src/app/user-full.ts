import {Request} from "./request";

export interface UserFull {
  id: number,
  username: string,
  profile: {
    id: number,
    name: string,
    lastName: string,
    requests: Request[],
    visibility: boolean,
    relations: []
  }
}
