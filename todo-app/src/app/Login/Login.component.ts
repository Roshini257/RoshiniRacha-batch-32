import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  profileInfo = {
    accounts: [{
      name: 'Checking',
      balance: '5M'
    },
    {
      name: 'Savings',
      balance: '5M'
    },{
      name: 'Credit cards',
      balance: '0000'
    }]
  }
  isUserLoggedIn=true;


  signupUsers:any[]=[];
  signupObj:any={
    userName:'',
    email:'',
    password:'',
    phone:'',
    dob:''

  };
  loginObj:any={
    email:'',
    password:''

  };

  constructor(private router:Router,private aService: AuthService) { }

  ngOnInit(): void {
    console.log('aService', this.aService.isLoggedIn);


   

    const localData=localStorage.getItem('signupUsers');
    if(localData!=undefined){
      this.signupUsers=JSON.parse(localData);
    
    }
  }

  onSignUp() {
    
    this.signupUsers.push(this.signupObj);
    
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    
    this.signupObj = {  
    userName:'',
    email:'',
    password:'',
    phone:'',
    dob:''
    };
    }
    onLogin() {
      // debugger
  const isUserExist = this.signupUsers.find(m => m.email == this.loginObj.email && m.password == this.loginObj.password)
    
    if(isUserExist != undefined) {
    alert('User Login Successfully');
    console.log(this.signupUsers[0].userName);
    this.aService.isLoggedIn = true;
    this.router.navigate(['/profile']);
    // this.isUserLoggedIn = true;
    // window.localStorage.setItem('login',
    // JSON.stringify(this.isUserLoggedIn));
    // this.router.navigate(['/profile']);
    
  

   
    } else {
    alert('Wrong credentials');
    this.isUserLoggedIn = false;

 
   


  
    

}
    }
  }
