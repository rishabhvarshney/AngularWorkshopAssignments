import {ContentComponent} from "./content/content.component";
import {ContentDetailsComponent} from "./content/content-details/content-details.component";
import {Routes} from "@angular/router";
import {CreateContentComponent} from "./content/create-content/create-content.component";
import {Error404Component} from "./errors/404.component";
import {ContentRouteActivator} from "./content/content-details/content-route-activator.service";

export const appRoutes:Routes=[
  {   path:'blogs/new',component: CreateContentComponent},
  {   path:'blogs',component:ContentComponent},
  {   path:'blogs/404',component:Error404Component},
  {   path :'blogs/:id',component:ContentDetailsComponent,canActivate:[ContentRouteActivator]},
  {   path :'',redirectTo:'blogs',pathMatch:'full'},
  {   path:'user',loadChildren:'app/user/user.module#UserModule'}

]
