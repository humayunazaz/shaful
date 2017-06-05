import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'single-date',
  templateUrl: './single-date.component.html',
  styleUrls: ['./single-date.component.css']
})
export class SingleDateComponent implements OnInit {
  dates;
  @Input() url="";
  @Input() special=false;
  @Input() sentRequest=false;
  @Input() receivedRequest=false;

  constructor(private appService: AppService) { }
  getContent(url){
    this.appService.getContent(url).subscribe(
      data => {
        this.dates = data;
      }
    )
  }
  albumClick(value){
    console.log(value);
  }
  profileClick(value){

  }
  interested(value){}
  mayBe(value){}
  No(value){}
  sendRequest(value){}
  maybeLater(value){}
  block(value){}
  cancelRequest(value){}
  acceptRequest(value){}
  cancel(value){}
  blockPermanentely(value){}

  ngOnInit() {
    this.getContent(this.url);  
  }

}
