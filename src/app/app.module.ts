import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginPageComponentComponent } from './login-page-component/login-page-component.component';
import { SignInPageComponent } from './login-page-component/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './login-page-component/sign-up-page/sign-up-page.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule }   from '@angular/forms';







@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponentComponent,
    SignInPageComponent,
    SignUpPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
