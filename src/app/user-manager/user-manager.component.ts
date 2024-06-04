import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {FormsModule} from "@angular/forms";
import {User} from "../interface/user";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {SidebarComponent} from "../sidebar/sidebar.component";

@Component({
  selector: 'app-user-manager',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './user-manager.component.html',
  styleUrl: './user-manager.component.css'
})
export class UserManagerComponent {

  userService: UserService = inject(UserService)
  username:string = ""
  password:string = ""
  activeRoute: string
  typePassword: string = "password"

  constructor(private router:Router) {
     this.activeRoute = this.router.url
  }

  createUserObject(username:string,password:string){
    let user:User ={
      username: username,
      password: password
    }
    return user
  }

  async register(user:User){
    this.userService.registerUser(user)
    await this.router.navigateByUrl("/home")
  }

  async login(user:User){
    this.userService.loginUser(user)
    await this.router.navigateByUrl("/home")
  }


  exchangePasswordType(){
    if (this.typePassword == "password"){
      this.typePassword = "text"
    }else {
      this.typePassword = "password"
    }
  }

}
