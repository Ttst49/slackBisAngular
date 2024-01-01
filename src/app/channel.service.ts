import { Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalConstants} from "./common/global-constants";
import {HttpHeaders} from "@angular/common/http";
import {Channel} from "./channel";
import {ChannelCreationComponent} from "./channel-creation/channel-creation.component";
import {Router} from "@angular/router";
import {ChannelMessage} from "./channel-message";

@Injectable({
  providedIn: 'root'
})
export class ChannelService {


    constructor(private http:HttpClient, private router: Router) {
  }

  getAllChannels(){
      return this.http.get(GlobalConstants.baseUrl+"channel/showAll")
    }


  createChannel(channelName : Channel){
      this.http.post(GlobalConstants.baseUrl+'channel/create',channelName).subscribe({
          next: (channelFromFetch)=>{
            console.log(channelFromFetch)
          }
      })

    this.router.navigateByUrl("channels")
  }


  getOneChannelById(id: number){
      return this.http.get(GlobalConstants.baseUrl+`channel/show/${id}`)
  }

  removeOneChannel(id:number){
      return this.http.delete(GlobalConstants.baseUrl+`channel/remove/${id}`).subscribe({
        next:(data)=>{
          console.log(data)
        }
      })
  }


  joinChannel(id:number){
      this.http.post(GlobalConstants.baseUrl+`channel/join/${id}`,id).subscribe({
        next:(data)=>{
          console.log(data)
        }
      })
  }

  sendMessageToChannel(channelId: number, message: ChannelMessage) {
    this.http.post(GlobalConstants.baseUrl+`channel/message/create/${channelId}`,message).subscribe({
      next:(data)=>{
        console.log(data)
      }
    })
  }

}
