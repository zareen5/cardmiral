import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {
  contactForm: FormGroup ;
  type: any;

  constructor(private formBuilder: FormBuilder,  private route: ActivatedRoute, private _activatedRoute: ActivatedRoute) { 
    this.contactForm = this.createFormGroup() ;
  }

  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type');
    // this.parameterValue = this._activatedRoute.snapshot.params.parameter
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

onSubmit(){
  //I will cre
}
}
