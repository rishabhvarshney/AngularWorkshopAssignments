import {Component} from "@angular/core";
import {OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "./user.service";
import {Router} from "@angular/router";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit{


  constructor(private userService:UserService,
              private router:Router)
  {}
  profileForm:FormGroup
  ngOnInit(){

    let firstName =new FormControl(this.userService.currentUser.firstName,[Validators.required,Validators.pattern('[a-zA-Z].*')])
    let lastName= new FormControl(this.userService.currentUser.lastName,Validators.required)
    this.profileForm=new FormGroup({
      firstName:firstName,
      lastName:lastName
    })
  }
  saveProfile(formValues){
    if(this.profileForm.valid) {
      this.userService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['blogs'])
    }
  }

  cancel(){
    this.router.navigate(['blogs'])
  }

  logout()
  {
    this.userService.logOut().subscribe(()=>{
      this.router.navigate(['/login']);
    })
   }
}
