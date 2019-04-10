import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostListComponent } from '../shared/components/post-list/post-list.component';
import { PostListItemComponent } from '../shared/components/post-list-item/post-list-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PostListComponent, PostListItemComponent,],
  exports: [
    PostListComponent,
    PostListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
