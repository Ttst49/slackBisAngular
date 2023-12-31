import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import {NavbarComponent} from "./navbar/navbar.component";
import {ChannelManagerComponent} from "./channel-manager/channel-manager.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, ChannelManagerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'slackBisAngular';

  token = localStorage.getItem("bearerToken")

  ngOnInit() {
    initFlowbite()
  }

}
