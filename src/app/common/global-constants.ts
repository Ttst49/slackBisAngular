import {UserFull} from "../interface/user-full";
import {ProfileFull} from "../interface/profile-full";

export class GlobalConstants{


  public static token = localStorage.getItem("bearerToken")
  public static baseUrl: string = "https://localhost:8000/api/" //"https://slackbis.thibautstachnick.com/api/"
  public static actualUser : UserFull
  public static actualProfile: ProfileFull
  public static errorStatus : string
  public static actualFriends : UserFull[]
  static actualFriendsAsString: string[] = []

}
