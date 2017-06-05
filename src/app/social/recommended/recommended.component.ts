import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'bs-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {
  @Input() recUrl='';
  @Input() jobs=false;
  @Input() dating=false;
  recommends;

  constructor(private appService:AppService) { }
  getContent(url){
    this.appService.getContent(url).subscribe(
      data => {
        this.recommends = data;
      }
    )
  }
  ngOnInit():any {
    this.getContent(this.recUrl);
  }

}
