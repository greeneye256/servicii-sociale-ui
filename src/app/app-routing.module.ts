import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {UserRole} from './model/userRole';
import {SignUpComponent} from './components/user/sign-up/sign-up.component';
import {UserslistComponent} from './components/user/userslist/userslist.component';
import {EditUserComponent} from './components/user/edit-user/edit-user.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'edit/user/:id',
    component: EditUserComponent,
    canActivate: [AuthGuard],
    data: {roles: [UserRole.ROLE_ADMIN]}
  },
  {
    path: 'users',
    component: UserslistComponent,
    canActivate: [AuthGuard],
    data: {roles: [UserRole.ROLE_ADMIN]}
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [AuthGuard],
    data: {roles: [UserRole.ROLE_ADMIN]}
  },
  {path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
