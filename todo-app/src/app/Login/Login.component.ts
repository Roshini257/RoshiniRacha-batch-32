import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {

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
  

   
    } else {
    alert('Wrong credentials');
 
   


  
    

}
    }
  }
