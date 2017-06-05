import { Component, OnInit, NgZone, Inject } from '@angular/core';
import { AppService } from '../../app.service';
import { NgUploaderOptions } from 'ngx-uploader';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  tabsHead = [
    {
      title: 'Status',
      id: 'status',
      icon1: '../../../assets/img/menu_ico_7.png',
      icon2: '../../../assets/img/menu_ico_77.png',
      user : '../../../user.json',
      post : 'http://35.166.70.82/posts'
    },
    {
      title: 'Events',
      id: 'events',
      icon1: '../../../assets/img/menu_ico_8.png',
      icon2: '../../../assets/img/menu_ico_88.png',
      user : '../../../user.json'
    },
    {
      title: 'Images/Videos',
      id: 'images',
      icon1: '../../../assets/img/menu_ico_9.png',
      icon2: '../../../assets/img/menu_ico_99.png',
      user : '../../../user.json'
    }
  ];
  url='http://35.166.70.82/profile';
  userImg;
  user;
  loading=true;
  error=false;
  options;
  token;
  response;

  constructor(private appService:AppService, @Inject(NgZone) private zone: NgZone) {
    this.token = window.localStorage.getItem('token');
    this.options = new NgUploaderOptions({
      url: 'http://35.166.70.82/users/49',
      authToken: this.token,
      allowedExtensions: ['jpg', 'png']
    });
  }
  handleUpload(data: any) {
    setTimeout(() => {
      this.zone.run(() => {
        this.response = data;
        if (data && data.response) {
          this.response = JSON.parse(data.response);
          console.log(this.response);
        }
      });
    });
  };
  getContent(url){
    this.appService.getContent(url).subscribe(
      data => {
        this.user = data.profile;
        if(this.user.user.profile_image.indexOf('null') > -1){
          this.user.user.profile_image = '../../../assets/img/user_pic.jpg';
        };
        // console.log(JSON.stringify(this.user));
        // this.userImg = this.user.img;
        // this.userImg = this.userImg.toString().replace("./", "");
        // this.userImg = '../../../' + this.userImg;
      },
      err => {this.loading = false; this.error = true;},
      () => {this.loading = false;}
    )
  }
  ngOnInit() {
    this.getContent(this.url);
    this.appService.changeTab('profile');
  }

}
