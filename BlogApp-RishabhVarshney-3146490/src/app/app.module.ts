import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ContentDetailsComponent } from './content/content-details/content-details.component';
import {appRoutes} from "./routes";
import {RouterModule} from "@angular/router";
import { ContentAloneComponent } from './content/content-alone/content-alone.component';
import {ContentService} from "./content/shared/content.service";
import {CreateContentComponent } from './content/create-content/create-content.component';
import {Error404Component} from "./errors/404.component";
import {ContentRouteActivator} from "./content/content-details/content-route-activator.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {UserModule } from './user/user.module';
import {UserService} from "./user/user.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    ContentDetailsComponent,
    ContentAloneComponent,
    CreateContentComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpModule,
    UserModule,
    FormsModule
  ],
  providers: [
    UserService,
    ContentService,
    ContentRouteActivator,
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}

