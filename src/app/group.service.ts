import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalConstants} from "./common/global-constants";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http : HttpClient) { }


  getAllGroupsFromActualUser(){
    return this.http.get(GlobalConstants.baseUrl+"group/conversation/showAll")
  }

  getOneGroupFromId(id: number) {
    return this.http.get(GlobalConstants.baseUrl+`group/conversation/show/${id}`)
  }
}
