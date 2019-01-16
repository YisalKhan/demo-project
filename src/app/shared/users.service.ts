import { Injectable } from '@angular/core';
import { Users } from './users.module';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userChanged = new Subject<Users[]>();

  userslist: Users[] = [
    new Users(
      'Johnny',
      'Male',
      'Government',
      'Electrician'
    ),
    new Users(
      'Mike',
      'Male',
      'Private',
      'Software Engineer'
    )
  ]
  constructor() { }

  getUsers() {
    return this.userslist.slice();
  }

  getUser(index:number) {
    return this.userslist[index];
  }

  addUsers(user : Users) {
    this.userslist.push(user);
    this.userChanged.next(this.userslist.slice());
  }

  updateUsers(index: number, newUser: Users) {
    this.userslist[index] = newUser;
    this.userChanged.next(this.userslist.slice());
  }

  deleteUser(index: number) {
    this.userslist.splice(index, 1);
    this.userChanged.next(this.userslist.slice());
  }
}
