import { Component, OnInit, Input } from '@angular/core';
import { AppService } from "../../app.service";

@Component({
  selector: 'job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  @Input() Url;
  @Input() applied = false;
  constructor(private appService: AppService) { }
  jobs;
  loading = true;
  error = false;

  getContent(url){
    this.appService.getContent(url).subscribe(
      data => {
        this.jobs = data.jobs;
        console.log(this.jobs);
      },
      err => {this.error = true; this.loading = false;},
      () => {this.loading = false;}
    )
  }

  ngOnInit() {
    this.getContent(this.Url);
  }

}
