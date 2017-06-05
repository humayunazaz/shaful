import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { customValidator } from '../jobs/emailvalidators';
import { Router } from '@angular/router';

@Component({
  selector: 'bs-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  url = 'http://35.166.70.82/signup';
  signupForm: FormGroup;
  height;
  signupHeight;

  constructor(private appService:AppService, private fb:FormBuilder, private router:Router) {
    this.signupForm = fb.group({
      username: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])],
      email: ['', Validators.compose([
        Validators.required,
        customValidator.emailValid
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])],
      password_confirmation: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])],
      firstname: [''],
      lastname: ['']
    })
  }

  onSubmit(){
    // console.log(JSON.stringify(this.signupForm.value));
    this.appService.createUser(this.signupForm.value, this.url).subscribe(
      data => {
        if(data.token){
          window.localStorage.setItem('token', data.token);
          window.localStorage.setItem('username', this.signupForm.value.username);
        }
        if(data.token != undefined){
          this.appService.changeUser(this.signupForm.value.username);
          this.router.navigate(['social']);
        }
      }
    )
  }

  ngOnInit() {
    this.appService.changeSign('signup');
    this.height = window.innerHeight;
    this.signupHeight = (this.height - 522) / 2;
  }

}
