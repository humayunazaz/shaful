import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {
  searchs;
  filteredList=[];
  query='';

  constructor(private appService:AppService) { }
  getContent(url){
    this.appService.getContent(url).subscribe(
      data => {
        this.searchs = data;
      }
    )
  }
  filter(){
    if(this.query != ""){
      this.filteredList = this.searchs.filter( search => {
        return search.value.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
      });
    } else {
        this.filteredList = [];
    }
  }
  ngOnInit() {
    let url = '../../../search.json';
    this.getContent(url);
  }

}
