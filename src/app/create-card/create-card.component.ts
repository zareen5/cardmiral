import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../services/card.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {
  type: any;

  constructor(
    public cardsService: CardsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type');
   }

  revert (){}

  onSubmit(){
    let data = this.cardsService.cardForm.value;
    this.cardsService.createCard({'type': this.type, ...data})
      .then(res => {
        this.cardsService.messageForm.reset();
      });
  }
}
