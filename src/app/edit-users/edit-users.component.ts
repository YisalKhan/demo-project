import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  id: number;
  editMode = false;
  usersForm : FormGroup;
  constructor(
      private usersService : UsersService,
      private router : Router,
      private route : ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] !=null;
        this.initForm();
      }
    );
  }

  onSubmit() {
    if(this.editMode) {
      this.usersService.updateUsers(this.id, this.usersForm.value);
    }
    else {
      this.usersService.addUsers(this.usersForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['/'], {relativeTo: this.route});
  }

  onDelete() {
    this.usersService.deleteUser(this.id);
    this.onCancel();
  }

  private initForm() {
    let name = '';
    let gender = '';
    let employee = '';
    let occupation = '';
    if(this.editMode) {
      const user = this.usersService.getUser(this.id);
      name = user.name;
      gender = user.gender;
      employee = user.employee;
      occupation = user.occupation;
    }
    this.usersForm = new FormGroup({
      'name' : new FormControl(name, Validators.required),
      'gender' : new FormControl(gender, Validators.required),
      'employee' : new FormControl(employee, Validators.required),
      'occupation' : new FormControl(occupation, Validators.required),
    });
  }

}
