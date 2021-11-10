import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './admin-component/form/form.component';
import { LoginComponent } from './admin-component/login/login.component';
import { RegisterComponent } from './admin-component/register/register.component';

const routes: Routes = [

    {
        path: 'user-profile',
        loadChildren: () =>
          import('./admin.module').then((m) => m.AdminModule),
      },

    {   path: 'form',   component: FormComponent,
        children :[
            { path: 'login', component: LoginComponent},
            { path: 'register', component: RegisterComponent},
        ]
    },
];
//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
