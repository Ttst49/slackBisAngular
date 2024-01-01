import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UserManagerComponent} from "./user-manager/user-manager.component";
import {ChannelManagerComponent} from "./channel-manager/channel-manager.component";
import {ChannelCreationComponent} from "./channel-creation/channel-creation.component";
import {ChannelDetailComponent} from "./channel-detail/channel-detail.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {GroupManagerComponent} from "./group-manager/group-manager.component";

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
  },
  {
    path: "users", component: UserDetailComponent
  },
  {
    path: "profile/:id", component: UserDetailComponent
  },
  {
    path: "profile/getFriends", component: UserDetailComponent
  },
  {
    path: "channel/users/:id", component: UserDetailComponent
  },
  {
    path: "groups", component: GroupManagerComponent
  }

];
