import { Component, OnInit,OnChanges} from '@angular/core';
import {ContentService} from "./shared/content.service";
import {IBlog} from "./shared/content.model";
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit,OnChanges {

  error: string;
  content: IBlog[];
  filterBy: any = 'all';
  favoriteBlogs: IBlog[];
  filteredContent: IBlog[];
  _listFilter: string;

  constructor(private contentService: ContentService,
              public userService: UserService) {
    this.filteredContent = this.content;
  }

  ngOnInit() {
    this.contentService.getEvents().subscribe(events => {
        this.content = events;
        this.filteredContent = this.content;
        this.favoriteBlogs = this.content.filter((blog) => {
          return this.userService.currentUser['favorites'].indexOf(blog['id']) > -1;
        });
        console.log(events);
      },
      error => {
        this.error = "Invalid id";
      }
    )
  }

  ngOnChanges() {
    if (this.content) {
      console.log("in content");
      this.filterEvents(this.filterBy);
    }
    else
      console.log("not in content");
  }

  filterEvents(filter) {
    if (filter === 'all') {
      console.log("true");
      this.filteredContent = this.content.slice(0);
    }
    else {
      console.log("false");
      this.filteredContent = this.content.filter(event => {
        return event.category.toLocaleLowerCase() == filter;
      })
    }
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredContent = this.listFilter ? this.performFilter(this.listFilter) : this.content;
    console.log(this.filteredContent);
  }

  performFilter(filterBy1: string): IBlog[] {
    filterBy1 = filterBy1.toLowerCase();
    console.log(filterBy1);
    console.log(this.content.filter((blog: IBlog) => {
      console.log("in fun");
      console.log(  blog.title.toLocaleLowerCase().includes(filterBy1));
      blog.title.toLowerCase().indexOf(filterBy1) !== -1
    }));
   return this.content.filter((blog:IBlog) => {
     blog.title.toLocaleLowerCase().includes(filterBy1);
    });
  }

  markFavorite(blog: IBlog) {
    console.log()
    if (this.userService.currentUser['favorites'].indexOf(blog['id']) === -1) {
      this.userService.currentUser['favorites'].push(blog['id']);
      this.userService.updateFavorites(this.userService.currentUser)
        .subscribe(data => {
          console.log(data);
          this.favoriteBlogs.push(blog);
        });
    }
  }
}
