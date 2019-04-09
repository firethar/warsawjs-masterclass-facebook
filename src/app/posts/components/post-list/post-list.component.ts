import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts = [0, 0, 0];

  constructor() { }

  ngOnInit() {
  }

  trackPost( index: number ) {
    return index;
  }

}
