import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-dating-request',
  templateUrl: './dating-request.component.html',
  styleUrls: ['./dating-request.component.css']
})
export class DatingRequestComponent implements OnInit {
  constructor(private appService:AppService) { }
  sentRequest=true;
  receivedRequest=true;
  url="../../../../dating.json";
  ngOnInit() {
    this.appService.changeTab('dating requests');
  }

}
