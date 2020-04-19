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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    UserslistComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
