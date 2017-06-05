import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'bs-photomodel',
  templateUrl: './photomodel.component.html',
  styleUrls: ['./photomodel.component.css']
})
export class PhotomodelComponent implements OnInit {
  @Input() photo;
  @Input() prevId;
  @Input() nextId;
  @Output() newId = new EventEmitter();
  
  constructor() { }
  
  nextPhoto(id){
    this.newId.emit({ newId : id});
  }
  move(event){
    console.log(event);
  }
  ngOnInit() {
  }

}
