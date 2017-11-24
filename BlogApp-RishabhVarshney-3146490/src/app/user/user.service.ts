import {Injectable} from "@angular/core";
import {IUser} from "./user.model";
import {Http, RequestOptions,Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {isUndefined} from "util";

const BASE_URL='http://localhost:3000/users/';
const BASE_URL1='http://localhost:3000/logout';
@Injectable()
export class UserService{

  currentUser:IUser;
  constructor(private http:Http){}


  loginUser(userName:string,password:string){

    return this.http.get(BASE_URL)
      .map(res => {
        let userData = res.json();
        var authUser = userData.find((user)=> user.username === userName && user.password ===password);
        this.currentUser=authUser;
        if(authUser){
          console.log(authUser);

        }
        return authUser;
      })
  }
  isAuthenticated(){
    return !!this.currentUser;
  }
  updateCurrentUser(firstName:string, lastName:string){
    this.currentUser.firstName=firstName;
    this.currentUser.lastName=lastName;
  }
  updateFavorites(data) {
    const header = {headers: new Headers({'Content-Type': 'application/json'})}
    const fullURL = BASE_URL + `${data.id}`
    return this.http.put(fullURL, data, header)
      .map(res => {res.json()
        console.log(res.json())}
      );
  }
  logOut(){
    //this.currentUser= undefined;
    let headers=new Headers({'Content-Type':'application/json'});
    let options =new RequestOptions({headers:headers});

    return this.http.post(BASE_URL1,JSON.stringify({}),options);
  }
}
