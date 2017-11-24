import {Component, Input, OnChanges} from '@angular/core';
import {Routes} from "@angular/router";
import {IBlog} from "../shared/content.model";

@Component({
  selector: 'app-content-alone',
  templateUrl: './content-alone.component.html',
  styleUrls: ['./content-alone.component.css']
})
export class ContentAloneComponent implements OnChanges {

@Input() event:IBlog;
@Input() filterBy:string;
  constructor() { }

  ngOnChanges() {
  }
}
