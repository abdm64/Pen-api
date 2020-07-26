import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fullImagePath: string;
  fullImagePath1: string;
  fullImagePath2: string;

  constructor() {
    this.fullImagePath = 'assets/AppImage/1.jpg'
    this.fullImagePath1 = 'assets/AppImage/Logo_Usthb.png'
    this.fullImagePath2 = 'assets/AppImage/Logo_Djezzy.png'
  }

  ngOnInit(){


  }



}
