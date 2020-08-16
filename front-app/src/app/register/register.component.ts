import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fullImagePath: string;
  fullImagePath1: string;
  fullImagePath2: string;

  constructor(private router: Router) {
    this.fullImagePath = 'assets/AppImage/1.jpg'
    this.fullImagePath1 = 'assets/AppImage/Logo_Usthb.png'
    this.fullImagePath2 = 'assets/AppImage/Logo_Djezzy.png'
  }

  ngOnInit(){


  }
  connect(user,pass){
   const username = user.value
   const password = pass.value
   if (username === "abdm64" && password === "0000"){

//route to main page
this.router.navigateByUrl('/Analyse-Plate');

   } else {

    alert("username or password in not valid ")

   }




  }



}
