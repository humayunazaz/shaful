import { Component, OnInit, NgZone, Inject } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos;
  token;
  options: NgUploaderOptions;
  response;
  videoContent;
  loading = true;
  error;
  loadingVideo = false;
  constructor(private appService:AppService, @Inject(NgZone) private zone: NgZone) {
    this.token = window.localStorage.getItem('token');
    this.options = new NgUploaderOptions({
      url: 'http://35.166.70.82/videos',
      authToken: this.token
    });
  }
  url="http://35.166.70.82/videos";

  handleUpload(data: any) {
    this.loadingVideo = true;
    this.getContent(this.url);
    setTimeout(() => {
      this.zone.run(() => {
        this.response = data;
        if (data && data.response) {
          this.response = JSON.parse(data.response);
          this.loadingVideo = false;
        }
      });
    });
  }

  getContent(url){
    this.appService.getContent(url).subscribe(
      data => {
        this.videos = data.videos;
      },
      err => {this.error = true; this.loading = false;},
      () => {this.loading = false;}
    )
  }
  model(content){
    this.videoContent = content;
  }
  ngOnInit() {
    this.appService.changeTab('videos');
    this.getContent(this.url);
  }

}
