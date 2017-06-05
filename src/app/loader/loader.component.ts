import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bs-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  @Input() loading = true;
  @Input() error = false;
  @Input() height = 500;
  margin;
  constructor() { }

  ngOnInit() {
    
    this.margin = (this.height - 30) / 2;
  }

}
