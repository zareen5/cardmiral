import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {
  contactForm: FormGroup ;


  constructor(private formBuilder: FormBuilder) { 
    this.contactForm = this.createFormGroup() ;
  }

  ngOnInit(): void {
  }

  createFormGroup() {

    return this.formBuilder.group( {
      cardFor: '',
      cardForEmail:'',
      signers: '',
      requestor: '',
      expiryData: ''

    })
  }

revert (){}

onSubmit(){}
}
