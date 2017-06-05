import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import { AuthService } from './auth-service.service';

@Injectable()
export class AuthGuardService implements CanActivate{
  username;
  token;
  loggedIn = false;
  constructor(private router:Router, private appService:AppService, private authService:AuthService) { 
  }
  
  canActivate(){
    this.username = window.localStorage.getItem('username');
    this.token = window.localStorage.getItem('token');
    if(this.username && this.token){
      return true;
    } else{
        this.router.navigate(['login']);
        window.localStorage.removeItem('username');
        window.localStorage.removeItem('token');
        return false;
      }
    }
  }
