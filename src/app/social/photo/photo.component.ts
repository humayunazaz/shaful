import { Component, OnInit, ElementRef, NgZone, Inject } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';
import { AppService } from '../../app.service';
import { album } from './album.interface';
import { Photo } from './photo.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  album = new album();
  options: NgUploaderOptions;
  response: any;
  hasBaseDropZoneOver: boolean;
  token;
  photos;
  newPhoto:Photo;
  albums;
  photoIds = [];
  constructor(private appService:AppService, private el:ElementRef, @Inject(NgZone) private zone: NgZone) {
    this.token = window.localStorage.getItem('token');
    this.options = new NgUploaderOptions({
      url: 'http://35.166.70.82/photos',
      authToken: this.token,
      allowedExtensions: ['jpg', 'png']
    });
  }
  imageSrc;
  tabsData=[
    {
      title: 'Your photos',
      id: 'photo'
    },
    {
      title: 'Albums',
      id: 'album'
    }
  ];
  additionalPhoto = false;
  url='http://35.166.70.82/photos';
  aUrl="../../../../albums.json";
  loading = true;
  error = false;
  loadingPic = false;
  
  handleUpload(data: any) {
    this.loadingPic = true;
    setTimeout(() => {
      this.zone.run(() => {
        this.response = data;
        if (data && data.response) {
          this.response = JSON.parse(data.response);
          this.newPhoto = this.response;
          this.photos.push(this.newPhoto);
          this.getContent(this.url, this.aUrl);
          this.loadingPic = false;
        }
      });
    });
  };

  getContent(purl, vurl){
    var subc = Observable.forkJoin(
      this.appService.getContent(purl),
      this.appService.getContent(vurl)
    )
    .subscribe(
      data => {
        this.photos = data[0].photos;
        this.photoIds = [];
        let i = 0;
        while(this.photos[i]){
          this.photoIds.push(this.photos[i].id);
          i++;
        }
        this.albums = data[1];
      },
      err => {this.error = true, this.loading = false;},
      () => {this.loading = false;}
    )
  }
  ngOnInit() {
    this.appService.changeTab('photos');
    this.getContent(this.url, this.aUrl);
  }

}
