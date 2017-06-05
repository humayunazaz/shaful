import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'notifi',
  templateUrl: './notifi.component.html',
  styleUrls: ['./notifi.component.css']
})
export class NotifiComponent implements OnInit {
  @Input() icon;
  @Input() value;
  
  constructor() { }

  ngOnInit() {
  }

}
