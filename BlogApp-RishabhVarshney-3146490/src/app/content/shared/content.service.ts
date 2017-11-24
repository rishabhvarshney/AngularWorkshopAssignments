import {Injectable} from "@angular/core";
import {IBlog} from "./content.model";
import {Observable} from "rxjs/Rx";
import {Http,Response,Headers,RequestOptions} from "@angular/http";

const BASE_URL='http://localhost:3000/blogs';
@Injectable()
export class ContentService{

  constructor(private http:Http){}

  getEvents():Observable<IBlog[]>{
    return this.http.get(BASE_URL).map((response:Response)=>
    {
        return <IBlog[]>response.json();
  }).catch(this.handleError);
  }
  getEvent(id:number):Observable<IBlog>{
    return this.http.get(BASE_URL+"/"+id).map((response:Response)=>
    {
      return <IBlog>response.json();
    }).catch(this.handleError);
  }

  saveEvent(event):Observable<IBlog>  {
    let headers=new Headers({'Content-Type':'application/json'});
    let options =new RequestOptions({headers:headers});
     return this.http.post(BASE_URL,JSON.stringify(event),options).map((response:Response)=>{
      return response.json();
    }).catch(this.handleError);
  }

  deleteData(data) {
    const deleteURL = BASE_URL + `${data.id}`;
    return this.http.delete(deleteURL)
      .map(res => res.json());
  }
  private handleError(error:Response)
  {
    console.log(error.statusText)
    return Observable.throw(error);
  }
}

