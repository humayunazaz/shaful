import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bs-videomodel',
  templateUrl: './videomodel.component.html',
  styleUrls: ['./videomodel.component.css']
})
export class VideomodelComponent implements OnInit {
  @Input() content;
  
  constructor() { }

  ngOnInit() {
  }

}
