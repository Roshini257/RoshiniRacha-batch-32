import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Login/Login.component';
import { ProfileComponent } from './Profile/Profile.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './guards/auth.guards';



const routes: Routes = [{
  path:'login',
  component:LoginComponent,
  canDeactivate:[AuthGuard]
},{
  path:'profile',
  component:ProfileComponent,canActivate: [AuthGuard],canDeactivate:[AuthGuard]
},{
  path:'logout',
  component:LogoutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
