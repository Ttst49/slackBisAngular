export interface UserFull {
  id: number,
  username: string,
  profile: {
    id: number,
    name: string,
    lastName: string,
    requests: [],
    visibility: boolean,
    relations: []
  }
}
