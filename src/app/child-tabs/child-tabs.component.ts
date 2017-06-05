import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'child-tabs',
  templateUrl: './child-tabs.component.html',
  styleUrls: ['./child-tabs.component.css']
})
export class ChildTabsComponent implements OnInit {
  @Input() childTabs;
  @Output() update = new EventEmitter();
  childTab;

  constructor(private appService:AppService) { }
  clicked(value){
    this.update.emit({ newValue : value});
  }
  ngOnInit() {
    this.appService.childTab.subscribe(
      data => {
        this.childTab = data;
      }
    )
  }

}
