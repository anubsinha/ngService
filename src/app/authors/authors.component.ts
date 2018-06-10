import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors;
  count;
  constructor(authorsSevice: AuthorsService) { 
    this.authors = authorsSevice.listAuthors()
    this.count = this.authors.length; 
  }

  ngOnInit() {
  }

}
