import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';

const appRoutes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'new', component: EditUsersComponent },
  { path: ':id/edit', component: EditUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
