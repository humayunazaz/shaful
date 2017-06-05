import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-area-interest',
  templateUrl: './area-interest.component.html',
  styleUrls: ['./area-interest.component.css']
})
export class AreaInterestComponent implements OnInit {

  constructor(private appService:AppService) { }

  ngOnInit() {
    this.appService.changeTab('answer questions');
  }

}
