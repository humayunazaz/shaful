import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {

  constructor(private appService:AppService, private router:Router) { }
  
  gotoSingle(){
    let id = 1;
    this.router.navigate(['q-a/singleQuestion', id]);
  }
  
  ngOnInit() {
    this.appService.changeTab('ask question');
  }

}
