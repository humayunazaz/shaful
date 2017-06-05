import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dating-profile',
  templateUrl: './dating-profile.component.html',
  styleUrls: ['./dating-profile.component.css']
})
export class DatingProfileComponent implements OnInit {
  datingForm:FormGroup;

  constructor(private appService:AppService, private fb:FormBuilder) {
    this.datingForm = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      displayName: [''],
      dateOfBirth: [''],
      height: fb.group({
        feet: [''],
        inch: ['']
      }),
      gender: [''],
      interestedIn: [''],
      relationshipHistory: [''],
      children: [''],
      hairColor: [''],
      eyeColor: [''],
      bodyType: [''],
      smoking: [''],
      education: [''],
      religion: [''],
      occupation: [''],
      salary: [''],
      language: [''],
      place: ['']
    })
  }

  onSubmit(){
    console.log(this.datingForm.value);
  }
  ngOnInit() {
    this.appService.changeTab('dating profile');
  }

}
