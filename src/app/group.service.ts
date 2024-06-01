import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalConstants} from "./common/global-constants";
import {Message} from "./interface/message";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http : HttpClient, private router:Router) { }


  getAllGroupsFromActualUser(){
    return this.http.get(GlobalConstants.baseUrl+"group/conversation/showAll")
  }

  getOneGroupFromId(id: number) {
    return this.http.get(GlobalConstants.baseUrl+`group/conversation/show/${id}`)
  }

  createGroup(selected_values: number[]) {
    return this.http.post(GlobalConstants.baseUrl+"group/conversation/create",{members: selected_values})
  }

  sendMessage(groupId: number, message: Message) {
    this.http.post(GlobalConstants.baseUrl+`group/message/send/${groupId}`,message).subscribe({
      next:(data)=>{
        console.log(data)
      }
    })
  }
}
