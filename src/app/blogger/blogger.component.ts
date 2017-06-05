import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-blogger',
  templateUrl: './blogger.component.html',
  styleUrls: ['./blogger.component.css']
})
export class BloggerComponent implements OnInit {

  constructor(private appService:AppService) { }

  ngOnInit() {
    this.appService.menuTitle('blogger');
  }

}
