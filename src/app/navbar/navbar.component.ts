import { Component } from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {GlobalConstants} from "../common/global-constants";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  token = GlobalConstants.token
  protected readonly localStorage = localStorage;
}
