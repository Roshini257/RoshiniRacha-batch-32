import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/Header.component';
import { NavigationComponent } from './Navigation/Navigation.component';

@NgModule({
  declarations: [		
    AppComponent,
      HeaderComponent,
      NavigationComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
