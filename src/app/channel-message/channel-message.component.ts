import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-channel-message',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './channel-message.component.html',
  styleUrl: './channel-message.component.css'
})
export class ChannelMessageComponent {

}
