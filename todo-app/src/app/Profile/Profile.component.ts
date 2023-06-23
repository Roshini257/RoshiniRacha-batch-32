import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
// import { ProfileService } from '.Profile/profile.service';




@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileInfo = {
    accounts:[],
   
    fn: 'Roshini',
    ln: 'R',
    email: 'roshini.racha1997@gmail.com',
    phone: '816-582-8898'}

  constructor(private router: Router,private aService: AuthService) { }

  ngOnInit() {

    // window.localStorage.getItem('login')

  }
  navigateToPage() {
    this.router.navigate(['/logout']); // Replace '/target-route' with the actual route you want to navigate to
    this.aService.isLoggedIn=false;
    // this.router.navigate(['/login']); 
    // Perform any additional actions upon logout (e.g., show a success message)
    // console.log('Logout successful');
  }
  onAccountselectedInfo(event: any) {
    console.log('event', event);
    alert(event.balance);
  }

 
    
  
  

}
