import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostPageComponent } from './pages/post-page/post-page.component';
import { PostsRoutingModule } from './posts-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PostPageComponent],
  exports: [ ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule
  ],
})
export class PostsModule { }
