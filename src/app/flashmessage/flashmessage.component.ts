import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bs-flash',
  templateUrl: './flashmessage.component.html',
  styleUrls: ['./flashmessage.component.css']
})
export class FlashmessageComponent implements OnInit {
  @Input() content;
  @Input() success = false;
  @Input() fail = true;
  constructor() { }
  @Input() close = false;
  closeMessage(){
    this.close = true;
  }
  ngOnInit() {
  }

}
