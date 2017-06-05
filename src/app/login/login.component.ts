import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  url = 'http://35.166.70.82/signin';
  loginForm:FormGroup;
  content = 'Please Sign In or Sign Up to continue';
  currentUser = {
    username: "humayunazaz",
    password: "humayunkhan"
  }
  userValue = {
    firstname: 'humayun'
  }
  height;
  loginHeight;
  loginTitle;
  loginin = false;

  constructor(
    private appService:AppService, 
    private fb:FormBuilder, 
    private router:Router
    ) { 
    this.loginForm = fb.group({
      username: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])]
    })
  }
  // login(){
  //   let url = "http://35.166.70.82/signin";
  //   this.appService.login(this.currentUser, url).subscribe(
  //     data => {
  //       console.log(data);
  //     }
  //   )

  // }
  // editUser(){
  //   let url = 'http://35.166.70.82/users/9';
  //   this.appService.editUser(this.userValue, url).subscribe(
  //     data => {
  //       console.log(data);
  //     }
  //   )
  // }
  onSubmit(){
    this.content = 'Connecting';
    this.loginin = true;
    this.appService.login(this.loginForm.value, this.url).subscribe(
      data => {
        if(data.token){
          window.localStorage.setItem('token', data.token);
          window.localStorage.setItem('username', this.loginForm.value.username);
        }
        if(data.id && data.id != undefined){
          this.appService.changeUser(this.loginForm.value.username);
          this.router.navigate(['social']);
        }
      },
      err => {this.content = 'username or password incorrect';},
      () => {this.content = 'Login successfully';}
    )
  }
  ngOnInit() {
    this.appService.changeSign('signin');
    this.height = window.innerHeight;
    this.loginHeight = (this.height - 410) / 2;
  }

}
