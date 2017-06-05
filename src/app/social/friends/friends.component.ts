import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  results;
  Sortedresults;
  show=false;
  url = 'http://35.166.70.82/friends';
  loading = true;
  error = false;
  height= 600;
  constructor(private appService:AppService) { }

  showResults($event){
    if($event.search == ''){
      this.Sortedresults = this.results;
    } else{
      let friend = $event.search.search;
      let i = 0;
      this.Sortedresults = [];
      while(this.results[i]){
        if(this.results[i].fullName.toString().toLowerCase().indexOf(friend.toLowerCase()) > -1){
          this.Sortedresults.push(this.results[i]);
        }
        i++;
      }
    }
  }
  getResults(url){
    this.appService.getContent(url).subscribe(
      data => {
        this.results = data.friends;
        this.Sortedresults = this.results;
        let i = 0;
        while(this.Sortedresults[i]){
          if(this.Sortedresults[i].profile_picture.indexOf("null") > -1){
            this.Sortedresults[i].profile_picture = "../../../assets/img/avatars/female.png";
          }
          i++;
        }
      },
      err => {this.loading = true;},
      () => {this.show = true; this.loading=false;}
    )
  }
  addFriend(id){
    this.appService.addFriend(id, this.url).subscribe(
      data => {
      }
    )
  }
  ngOnInit() {
    this.appService.changeTab('friends');
    this.getResults(this.url);
  }

}
