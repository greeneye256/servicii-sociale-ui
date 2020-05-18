import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { LoginComponent } from './components/login/login.component';
import {JwtInterceptor} from './interceptors/jwt.interceptor';
import {ErrorInterceptor} from './interceptors/error.interceptor';
import {SignUpComponent} from './components/user/sign-up/sign-up.component';
import { UserslistComponent } from './components/user/userslist/userslist.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import { VolunteerListComponent } from './components/volunteer/volunteer-list/volunteer-list.component';
import { VolunteerCreateComponent } from './components/volunteer/volunteer-create/volunteer-create.component';
import { VolunteerEditComponent } from './components/volunteer/volunteer-edit/volunteer-edit.component';
import { OrganizationEditComponent } from './components/organization/organization-edit/organization-edit.component';
import { OrganizationListComponent } from './components/organization/organization-list/organization-list.component';
import { OrganizationCreateComponent } from './components/organization/organization-create/organization-create.component';
import { SocialCaseCreateComponent } from './components/social-case/social-case-create/social-case-create.component';
import { SocialCaseListComponent } from './components/social-case/social-case-list/social-case-list.component';
import { SocialCaseEditComponent } from './components/social-case/social-case-edit/social-case-edit.component';
import { EmployeeEditComponent } from './components/employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './components/employee/employee-create/employee-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    UserslistComponent,
    EditUserComponent,
    VolunteerListComponent,
    VolunteerCreateComponent,
    VolunteerEditComponent,
    OrganizationEditComponent,
    OrganizationListComponent,
    OrganizationCreateComponent,
    SocialCaseCreateComponent,
    SocialCaseListComponent,
    SocialCaseEditComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
