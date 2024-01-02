import {Component, inject} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {GlobalConstants} from "../common/global-constants";
import {RequestService} from "../request.service";

@Component({
  selector: 'app-request-manager',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './request-manager.component.html',
  styleUrl: './request-manager.component.css'
})
export class RequestManagerComponent {

  requestService: RequestService = inject(RequestService)

  constructor() {
    this.getAllRequests()
  }

  getAllRequests(){
    this.requestService.getAllRequests().subscribe({
      next:(requestsFromFetch)=>{
        console.log(requestsFromFetch)
      }
    })
  }


  protected readonly GlobalConstants = GlobalConstants;
}
