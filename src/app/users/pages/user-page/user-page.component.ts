import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  user: User = null;
  error = null;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.setupUser();
  }

  private setupUser() {
    const userId = this.route.snapshot.params.userId;

    this.userService.getUserById(userId)
      .subscribe({
        next: (user) => {
          this.user = user;
        },
        error: (err) => {
          this.user = null;
          console.error(err);
          this.error = err;
        }
      });
  }

}
