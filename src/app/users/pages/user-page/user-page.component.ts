import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../interfaces/user.interface';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit, OnDestroy {

  user: User = null;
  error = null;

  destroy$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.setupUser();
  }

  ngOnDestroy() {
    this.destroy$.next(null);
  }

  private setupUser() {
    const userId = this.route.snapshot.params.userId;

    this.userService.getUserById(userId)
      .pipe(
        takeUntil(this.destroy$)
      )
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
