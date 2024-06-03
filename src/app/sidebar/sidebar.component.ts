import {AfterViewInit, Component, inject} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {GlobalConstants} from "../common/global-constants";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent{

  userService: UserService = inject(UserService)
  token = GlobalConstants.token
  protected readonly localStorage = localStorage;
    protected readonly GlobalConstants = GlobalConstants;

    constructor() {
      this.userService.getActualUser()
    }
}
