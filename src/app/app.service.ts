import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { URLSearchParams } from "@angular/http"

@Injectable()
export class AppService {
  emitter: ReplaySubject<any> = new ReplaySubject(1);
  Title: ReplaySubject<any> = new ReplaySubject(1);
  childTab: ReplaySubject<any> = new ReplaySubject(1);
  width: ReplaySubject<any> = new ReplaySubject(1);
  Login: ReplaySubject<any> = new ReplaySubject(1);
  Sign: ReplaySubject<any> = new ReplaySubject(1);
  user: ReplaySubject<any> = new ReplaySubject(1);
  token;
  constructor(private http:Http) { 
    this.token = window.localStorage.getItem('token');
  }
  getWidth(value){
    this.width.next(value);
  }
  changeMenu(value){
    this.emitter.next(value);
  }
  menuTitle(value){
    this.Title.next(value);
  }
  changeTab(value){
    this.childTab.next(value);
  }
  changeLogin(value){
   this.Login.next(value); 
  }
  changeSign(value){
   this.Sign.next(value); 
  }
  changeUser(value){
    this.user.next(value);
  }
  // getContent(url){
  //   return this.http.get(url)
  //   .map(response => response.json());
  // }
  getContent(url){
    this.token = window.localStorage.getItem('token');
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({headers: headers});
    return this.http.get(url, options)
    .map(response => response.json());
  }
  uploadPosts(url, value){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({headers: headers});
    let data = new URLSearchParams();
    data.append('body', value);
    return this.http.post(url, data, options)
    .map(response => response.json());
  }
  postContent(url, image, name){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({headers: headers});
    let data = new URLSearchParams();
    data.append('fileName', name);
    data.append('fileData', image);

    return this.http.post(url, data, options)
    .map(response => response.json());
  }
  postJob(url, form){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({headers: headers});

    return this.http.post(url, form, options)
    .map(response => response.json());
  }
  addFriend(id, url){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({headers: headers});
    let data = new URLSearchParams();
    data.append('friendId', id);
    
    return this.http.post(url, data, options)
    .map(response => response.json());

  }
  postPhoto(url, file){
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    let options = new RequestOptions({headers: headers});
    // let data = new URLSearchParams();
    // data.append('fileData', image); 
    // data.append('fileName', name);

    return this.http.post(url, file, options)
    .map(response => response.json());
  }
  createUser(value, url){
    let username = value.username;
    if(username.indexOf(" ") > -1){
      while(username.indexOf(" ") > -1){
        username = username.replace(" ", "");
      }
    }
    let data = new URLSearchParams();
    data.append('username', username);
    data.append('password', value.password);
    data.append('password_confirmation', value.password_confirmation);
    data.append('email', value.email);
    data.append('firstName', value.firstname);
    data.append('lastName', value.lastname);

    return this.http.post(url, data)
    .map(response => response.json());
  }
  login(value, url){
    let username = value.username;
    if(username.indexOf(" ") > -1){
      while(username.indexOf(" ") > -1){
        username = username.replace(" ", "");
      }
    }
    let data = new URLSearchParams();
    data.append('username', username);
    data.append('password', value.password);
    return this.http.post(url, data)
    .map(response => response.json());
  }
  editUser(value, url){
    let data = new URLSearchParams();
    data.append('firstName', value.firstname);
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNDg2MTI3MzkwLCJleHAiOjE0ODYxMzA1OTB9.CBN7RWJ6Baf-On5JnD8ROWX_Qr3gK78cvt0bjrfNfdY';
    let headers = new Headers({ 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({headers: headers});

    return this.http.put(url, data, options)
    .map(response => response.json());
  }
  deleteUser(url){
    return this.http.delete(url)
    .map(response => response.json());
  }

}
