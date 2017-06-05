import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-special-someone',
  templateUrl: './special-someone.component.html',
  styleUrls: ['./special-someone.component.css']
})
export class SpecialSomeoneComponent implements OnInit {

  constructor(private appService:AppService) { }
  url="../../../../dating.json";
  special=true;
  title="Mutual";
  updateResult($event){
    // console.log($event.target.value);
    this.title = $event.target.value;
  }
  ngOnInit() {
    this.appService.changeTab('special someone');
  }

}
