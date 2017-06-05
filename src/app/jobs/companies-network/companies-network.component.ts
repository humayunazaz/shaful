import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { personal, educational, experience } from './formData.interface';
import { customValidator } from '../emailvalidators';

declare var jQuery:any;

@Component({
  selector: 'app-companies-network',
  templateUrl: './companies-network.component.html',
  styleUrls: ['./companies-network.component.css']
})
export class CompaniesNetworkComponent implements OnInit {
  personal:FormGroup;
  educational:FormGroup;
  experience:FormGroup;
  personalS;
  educationS;
  experienceS;
  personalDetail = new personal();
  educationalDetail = new educational();
  experienceDetail = new experience();
  userPic;
  width;

  constructor(private appService:AppService, private fb:FormBuilder) {
    this.personal = fb.group({
      firstName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])],
      lastName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      age: [],
      phone: [],
      email: ['', Validators.compose([
        Validators.required,
        customValidator.emailValid
      ])],
      description: []
    });
    this.educational = fb.group({
      lastDegree: ['', Validators.required],
      institute: ['', Validators.required],
      majors: ['', Validators.required],
      yearPassed: ['', Validators.required]
    });
    this.experience = fb.group({
      category: ['', Validators.required],
      durration: ['', Validators.required],
      company: ['', Validators.required],
      detail: []
    })
  }
  personalSubmit(){
    this.personalDetail = this.personal.value;
    this.personalS = true;
    this.userPic = jQuery('.uploaded-pic img').attr('src');

  }
  educationalSubmit(){
    this.educationalDetail = this.educational.value;
    this.educationS = true;
  }
  experienceSubmit(){
    this.experienceDetail = this.experience.value;
    this.experienceS = true;
  }
  ngOnInit() {
    this.appService.changeTab('resume builder');
    this.personalS = false;
    this.educationS = false;
    this.experienceS = false;
    this.appService.width.subscribe(
      data => {
        this.width = data;
      }
    )
  }

}
