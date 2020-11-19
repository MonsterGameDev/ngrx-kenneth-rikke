import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserComponent, UserHomeComponent],
  imports: [UserRoutingModule, CommonModule],
})
export class UserModule {}
