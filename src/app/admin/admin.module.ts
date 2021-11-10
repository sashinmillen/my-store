import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin.routing.modulel';

import { LoginComponent } from './admin-component/login/login.component';
import { RegisterComponent } from './admin-component/register/register.component';
import { FormComponent } from './admin-component/form/form.component';
import { DashboardComponent } from './admin-component/dashboard/dashboard.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, FormComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  providers: [],
})
export class AdminModule { }