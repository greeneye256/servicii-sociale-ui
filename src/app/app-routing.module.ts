import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {UserRole} from './model/userRole';
import {SignUpComponent} from './components/user/sign-up/sign-up.component';
import {UserslistComponent} from './components/user/userslist/userslist.component';
import {EditUserComponent} from './components/user/edit-user/edit-user.component';
import {VolunteerListComponent} from './components/volunteer/volunteer-list/volunteer-list.component';
import {VolunteerCreateComponent} from './components/volunteer/volunteer-create/volunteer-create.component';
import {VolunteerEditComponent} from './components/volunteer/volunteer-edit/volunteer-edit.component';
import {OrganizationListComponent} from './components/organization/organization-list/organization-list.component';
import {OrganizationCreateComponent} from './components/organization/organization-create/organization-create.component';
import {OrganizationEditComponent} from './components/organization/organization-edit/organization-edit.component';
import {EmployeeListComponent} from './components/employee/employee-list/employee-list.component';
import {EmployeeEditComponent} from './components/employee/employee-edit/employee-edit.component';
import {EmployeeCreateComponent} from './components/employee/employee-create/employee-create.component';
import {SocialCaseCreateComponent} from './components/social-case/social-case-create/social-case-create.component';
import {SocialCaseListComponent} from './components/social-case/social-case-list/social-case-list.component';

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
  {
    path: 'social-case-create',
    component: SocialCaseCreateComponent,
    canActivate: [AuthGuard],
    data: {roles: [UserRole.ROLE_ADMIN, UserRole.ROLE_WRITE]}
  },
  {
    path: 'social-case-list',
    component: SocialCaseListComponent,
    canActivate: [AuthGuard],
    data: {roles: [UserRole.ROLE_ADMIN, UserRole.ROLE_WRITE]}
  },
  {
    path: 'organization-list',
    component: OrganizationListComponent,
    canActivate: [AuthGuard],
    data: {roles: [UserRole.ROLE_ADMIN, UserRole.ROLE_WRITE]}
  },
  {
    path: 'organization-create',
    component: OrganizationCreateComponent,
    canActivate: [AuthGuard],
    data: {roles: [UserRole.ROLE_ADMIN, UserRole.ROLE_WRITE]}
  },
  {
    path: 'organization-edit/:id',
    component: OrganizationEditComponent,
    canActivate: [AuthGuard],
    data: {roles: [UserRole.ROLE_ADMIN, UserRole.ROLE_WRITE]}
  },
  {
    path: 'employee-list',
    component: EmployeeListComponent,
    canActivate: [AuthGuard],
    data: {roles: [UserRole.ROLE_ADMIN, UserRole.ROLE_WRITE]}
  },
  {
    path: 'employee-create',
    component: EmployeeCreateComponent,
    canActivate: [AuthGuard],
    data: {roles: [UserRole.ROLE_ADMIN, UserRole.ROLE_WRITE]}
  },
  {
    path: 'employee-edit/:id',
    component: EmployeeEditComponent,
    canActivate: [AuthGuard],
    data: {roles: [UserRole.ROLE_ADMIN, UserRole.ROLE_WRITE]}
  },
  {
    path: 'volunteer-list',
    component: VolunteerListComponent,
    canActivate: [AuthGuard],
    data: {roles: [UserRole.ROLE_ADMIN, UserRole.ROLE_WRITE]}
  },
  {
    path: 'volunteer-create',
    component: VolunteerCreateComponent,
    canActivate: [AuthGuard],
    data: {roles: [UserRole.ROLE_ADMIN, UserRole.ROLE_WRITE]}
  },
  {
    path: 'volunteer-edit/:id',
    component: VolunteerEditComponent,
    canActivate: [AuthGuard],
    data: {roles: [UserRole.ROLE_ADMIN, UserRole.ROLE_WRITE]}
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
