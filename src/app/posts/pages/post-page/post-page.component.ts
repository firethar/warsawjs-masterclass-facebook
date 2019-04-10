import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/post.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post: Post = null;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) { }

  ngOnInit() {
    this.setupPost();
  }

  private setupPost() {
    const postId = this.route.snapshot.params.postId;

    this.postService.getPostById(postId)
      .subscribe({
        next: (response) => {
          this.post = response;
        },
        error: (err) => {
          console.error(err);
        }
      });
  }

}
