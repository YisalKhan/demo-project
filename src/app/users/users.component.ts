import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../shared/users.module';
import { UsersService } from '../shared/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  users : Users[];
  subscription : Subscription;
  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private usersService : UsersService,
  ) { }

  ngOnInit() {
    this.subscription = this.usersService.userChanged.subscribe(
      (users : Users[]) => {
        this.users = users;
        console.log(users);
      }
    );
    this.users = this.usersService.getUsers();
  }

  onNewUser() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEditUser(index:number) {
    this.router.navigate([index+'/edit'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
