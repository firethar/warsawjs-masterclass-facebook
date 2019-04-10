import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { filter, map, delay, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PostsResponse } from '../../posts/interfaces/responses/posts-response.interface';
import { Users } from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<Users> {
    return this.http.get<PostsResponse>(environment.postsUrl)
      .pipe(
        map(response => response.posts),
        map(posts => {
          const users = posts.map((post) => {
            return post.author;
          });
          return users;
        })
      )
  }

  getUserById(userId: string) {
    return this.getUsers()
      .pipe(
        map((users) => {
          return users.find((user) => {
            return (user.id === userId);
          });
        }),
        delay(2000),
        catchError(err => {
          throw err;
        })
      );
  }
}
