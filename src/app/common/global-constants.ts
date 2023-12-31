import {UserFull} from "../user-full";


export class GlobalConstants{


  public static token = localStorage.getItem("bearerToken")
  public static baseUrl: string = "https://slackbis.thibautstachnick.com/api/"
  public static actualUser : UserFull
}
