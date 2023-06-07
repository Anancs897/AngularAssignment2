import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';

const routes: Routes = [  
      {path:'create',component:CreateUserComponent},
      {path:'view',component:ViewAllUsersComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
