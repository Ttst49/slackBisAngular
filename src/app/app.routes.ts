import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UserManagerComponent} from "./user-manager/user-manager.component";
import {ChannelManagerComponent} from "./channel-manager/channel-manager.component";
import {ChannelCreationComponent} from "./channel-creation/channel-creation.component";
import {ChannelDetailComponent} from "./channel-detail/channel-detail.component";

export const routes: Routes = [
  {
    path: "", redirectTo: "/home", pathMatch: "full"
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "register", component: UserManagerComponent
  },
  {
    path: "login", component: UserManagerComponent
  },
  {
    path: "channels", component: ChannelManagerComponent
  },
  {
    path: "channel/create", component: ChannelCreationComponent
  },
  {
    path: "channel/show/:id", component: ChannelDetailComponent
  }

];
