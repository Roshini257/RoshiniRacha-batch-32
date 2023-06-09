import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/Header.component';
import { NavigationComponent } from './Navigation/Navigation.component';
import { LoginComponent } from './Login/Login.component';
import { ProfileComponent } from './Profile/Profile.component';
import { AccountsInfoComponent } from './accounts-info/accounts-info.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [							
    AppComponent,
      HeaderComponent,
      NavigationComponent,
      LoginComponent,
      ProfileComponent,
      AccountsInfoComponent,
      LogoutComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
