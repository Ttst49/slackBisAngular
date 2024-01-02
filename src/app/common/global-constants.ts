import {UserFull} from "../user-full";
import {ProfileFull} from "../profile-full";


export class GlobalConstants{


  public static token = localStorage.getItem("bearerToken")
  public static baseUrl: string = "https://slackbis.thibautstachnick.com/api/"
  public static actualUser : UserFull
  public static actualProfile: ProfileFull
  public static errorStatus : string

}
