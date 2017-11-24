import {Component} from "@angular/core";
import {UserService} from "./user.service";
import {Router} from "@angular/router";

@Component({
  selector:'app-login',
  templateUrl:'./login.component.html'

})

export class LoginComponent{
model:any={};
  loginInvalid:boolean=false;

constructor(private userService:UserService,
            private router:Router)
{}

  login(formValues){
    this.userService.loginUser(formValues.userName,formValues.password).subscribe(
      data => {
        if(data) {
          this.router.navigate(['/blogs']);
        } else {
          alert("Incorrect Username/Password!");
        }
      },
      error => {
        this.loginInvalid=true;
      }
    //   resp=>{
    //   if(!resp){
    //
    //   }
    //   else
    //     this.router.navigate(['blogs'])
    // }
    )

  }
  cancel(){
    this.router.navigate(['blogs'])
  }
}
