import { Injectable } from '@angular/core';
import {GlobalConstants} from "./common/global-constants";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  constructor(private http : HttpClient, private router:Router) { }


  getAllConversationsFromActualUser(){
    return this.http.get(GlobalConstants.baseUrl+"private/conversation/showConversations")
  }

}
