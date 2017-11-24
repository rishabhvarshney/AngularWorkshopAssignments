import { Component, OnInit } from '@angular/core';
import {ContentService} from "../shared/content.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {IBlog} from "../shared/content.model";

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.css']
})
export class ContentDetailsComponent implements OnInit {
event:IBlog;

  constructor(private contentService:ContentService,
              private activatedRoute:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((params:Params)=>{
      this.contentService.getEvent(+params['id']).subscribe((blog:IBlog)=>{
        this.event=blog;
      })
    })

  }
  deleteBlog() {
    if (confirm('Are you sure to delete?')) {
      this.contentService.deleteData(this.event)
        .subscribe((data) => {
          console.log('blog deleted!');
          this.router.navigate(['/blogs']);
        });
    }
  }
  backBlog(){
    this.router.navigate(['/blogs']);
  }

}
