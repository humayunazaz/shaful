import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { newPost } from '../stream/post.interface';

@Component({
  selector: 'grand-child-tabs',
  templateUrl: './grand-child-tabs.component.html',
  styleUrls: ['./grand-child-tabs.component.css']
})
export class GrandChildTabsComponent implements OnInit {
  @Input() tabsHeads = [];
  clickedTab;
  posts;
  user;
  userImg;
  newPost= new newPost();
  uploadUrl = "http://35.166.70.82/posts/add";
  error=false;
  loading = true;

  constructor(private appService:AppService) { }

  clicked(value){
    this.posts = [];
    this.clickedTab == value.title;
    this.getMaterial(this.tabsHeads[0].user, this.tabsHeads[0].post);
  }
  getMaterial(sUrl, pUrl){
    var subscr = Observable.forkJoin(
      this.appService.getContent(sUrl),
      this.appService.getContent(pUrl)
    ).subscribe(
      data => {
        this.user = data[0];
        this.posts = data[1].posts;
        this.userImg = this.user.img;
        this.userImg = this.userImg.toString().replace("./", '');
        this.userImg = '../../../' + this.userImg;
      },
      err => {this.error = true; this.loading = false;},
      () => {this.loading = false;}
    )
  }
  updatePost($event){
    this.newPost.body = $event.update;
    this.newPost.user.full_name = window.localStorage.getItem('username');
    this.posts.push(this.newPost);
    this.appService.uploadPosts(this.uploadUrl, $event.update).subscribe(
      data => {
        console.log(data);
      }
    )
  }
  ngOnInit() {
    this.clickedTab = this.tabsHeads[0].title;
    this.getMaterial(this.tabsHeads[0].user, this.tabsHeads[0].post);
  }

}
