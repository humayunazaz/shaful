import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-matrimonial',
  templateUrl: './matrimonial.component.html',
  styleUrls: ['./matrimonial.component.css']
})
export class MatrimonialComponent implements OnInit {

  constructor(private appService:AppService) { }

  ngOnInit() {
    this.appService.menuTitle('matrimonial');
    this.appService.changeLogin(true);
  }

}
