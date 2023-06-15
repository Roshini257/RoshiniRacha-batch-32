import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showText=false;
  toggleMenu(){
    if(this.showText){
      this.showText=false;
    }
    else{
      this.showText=true;
    }

}
}
