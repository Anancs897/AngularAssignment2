import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PreviewComponentComponent } from './preview-component/preview-component.component';




@NgModule({
  declarations: [
    CreateUserComponent,
    ViewAllUsersComponent,
    PreviewComponentComponent,
    
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    ReactiveFormsModule
    
  ]
})
export class UserModuleModule { }
