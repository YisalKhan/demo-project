import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  users = [
    {
      id : '001',
      name : 'John',
      gender : 'Male',
      occupation : 'Electrician',
      employee : 'Government'
    },
    {
      id : '002',
      name : 'George',
      gender : 'Male',
      occupation : 'Software Engineer',
      employee : 'Private'
    },
  ];

  ngOnInit() {
  }

}
