import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostListComponent } from '../shared/components/post-list/post-list.component';
import { PostListItemComponent } from '../shared/components/post-list-item/post-list-item.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheInterceptor } from './interceptors/cache.interceptor';

@NgModule({
  declarations: [PostListComponent, PostListItemComponent,],
  exports: [
    PostListComponent,
    PostListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true
    }
  ]
})
export class SharedModule { }
