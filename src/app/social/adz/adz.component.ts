import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bs-adz',
  templateUrl: './adz.component.html',
  styleUrls: ['./adz.component.css']
})
export class AdzComponent implements OnInit {
  @Input() adz;
  constructor() { }

  ngOnInit() {
  }

}
