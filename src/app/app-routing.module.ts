import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './admin/admin-component/form/form.component';
import { LoginComponent } from './admin/admin-component/login/login.component';
import { RegisterComponent } from './admin/admin-component/register/register.component';

// const routes: Routes = [
//   {   path: 'user', component: UserComponent },
//   {   path: 'rights',   component: RightsComponent   },
//   {   path: 'dashboard',   component: DashboardComponent   },
// ];

import { AdminRoutingModule } from './admin/admin.routing.modulel';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.routing.modulel').then((m) => m.AdminRoutingModule),
  },

    {   path: 'form',   component: FormComponent  },
    {   path: 'register',   component: RegisterComponent   },
    {   path: 'login',   component: LoginComponent   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
