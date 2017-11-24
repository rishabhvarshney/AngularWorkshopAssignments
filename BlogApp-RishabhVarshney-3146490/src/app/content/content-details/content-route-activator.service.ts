import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {CanActivate,ActivatedRouteSnapshot} from "@angular/router";
import {ContentService} from "../shared/content.service";

@Injectable()
export class ContentRouteActivator implements CanActivate{

  constructor(private router:Router,
              private contentService:ContentService){
  }
  canActivate(route:ActivatedRouteSnapshot){
    const eventExists=!!this.contentService.getEvent(+route.params['id']);

    if(!eventExists){
      this.router.navigate(['blogs/404'])
    }
    return eventExists;

  }
}

