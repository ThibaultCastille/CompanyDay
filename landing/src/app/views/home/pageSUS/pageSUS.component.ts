import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sus',
  templateUrl: './pageSUS.component.html',
  styleUrls: ['./pageSUS.component.scss']
})
export class SUSComponent implements OnInit {

  title = 'newMat';
     
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  choiceSelected: string;
  choice: string[] = ['yes', 'no'];
  selectFile(event) {
    // here we have the result of the picture
    console.log(event.target.files);
  }
  constructor(private _formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      organization_name: ['', Validators.required],
      phone_organization: ['', Validators.required],
      contact_organization: ['', Validators.required],
      email_organization: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      organization_address: ['', Validators.required],
      organization_city: ['', Validators.required],
      organization_state: ['', Validators.required],
      organization_postalcode: ['', Validators.required],
      organization_country: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      organization_website: ['', Validators.required],
      organization_looking: ['', Validators.required],
      organization_validate: ['', Validators.required]
    });
  }
  
  submit(){
      console.log(this.firstFormGroup.value);
      console.log(this.secondFormGroup.value);
      console.log(this.thirdFormGroup.value);
  }
  
}
