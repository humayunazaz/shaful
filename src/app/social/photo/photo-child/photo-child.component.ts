import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../../app.service';


@Component({
  selector: 'photo-child',
  templateUrl: './photo-child.component.html',
  styleUrls: ['./photo-child.component.css']
})
export class PhotoChildComponent implements OnInit {
  @Input() tabsDatas;
  @Input() photos;
  @Input() albums;
  singlePhoto;
  prevId;
  nextId;
  @Input() photoIds;
  clickedTab='photo';
  

  constructor(private appService:AppService) { }

  clicked(value){
    this.clickedTab = value;
  }
  photoClicked(value){
    this.singlePhotoHere(value);
  }
  singlePhotoHere(value){
    this.singlePhoto = value;
    this.prevId = this.photoIds[this.photoIds.indexOf(value.id) - 1];
    this.nextId = this.photoIds[this.photoIds.indexOf(value.id) + 1];
  }
  updatePhoto($event){
    let id = $event.newId;
    let i = 0;
    while(this.photos[i]){
      if(this.photos[i].id === id){
        this.singlePhotoHere(this.photos[i]);
      }
      i++;
    }
  }
  ngOnInit() {
  }

}
