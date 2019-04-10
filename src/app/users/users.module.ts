import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPageComponent } from './pages/user-page/user-page.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UserPageComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
