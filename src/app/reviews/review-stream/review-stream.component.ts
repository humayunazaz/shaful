import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-review-stream',
  templateUrl: './review-stream.component.html',
  styleUrls: ['./review-stream.component.css']
})
export class ReviewStreamComponent implements OnInit {

  constructor(private appService:AppService) { }

  ngOnInit() {
    this.appService.changeTab('stream');
  }

}
