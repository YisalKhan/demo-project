import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private router : Router,
    private route: ActivatedRoute,
  ) { }

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

  onNewUser() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnInit() {
  }

}
