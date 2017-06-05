import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-review-interest',
  templateUrl: './review-interest.component.html',
  styleUrls: ['./review-interest.component.css']
})
export class ReviewInterestComponent implements OnInit {

  constructor(private appService:AppService) { }

  ngOnInit() {
    this.appService.changeTab('areas of interest');
  }

}
