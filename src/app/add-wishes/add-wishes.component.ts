import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../services/card.service';
import { Card } from '../models/card.model';

const DEFAULT_CARD: Card = {
  id: '',
  recipient: '',
  email: '',
  sender: '',
  type: '',
  messages: []
}

@Component({
  selector: 'app-add-wishes',
  templateUrl: './add-wishes.component.html',
  styleUrls: ['./add-wishes.component.scss']
})
export class AddWishesComponent implements OnInit {

  cardId: string = '';
  selectedCard: Card = DEFAULT_CARD;

  constructor(private route: ActivatedRoute, public cardsService: CardsService) { }

  ngOnInit(): void {
    this.cardId = this.route.snapshot.paramMap.get('id') || '';
    this.getCard();
  }

  getCard(): void {
    this.cardsService.retrieveCard(this.cardId)
      .subscribe((res: any) => {
        console.log(res.payload.data());
        this.selectedCard = res.payload.data() as Card;
      });
  }

  onSubmit(): void {
    let data = this.cardsService.form.value;
    console.log(data);
    this.cardsService.addMessage(this.cardId, this.selectedCard, data)
      .then(res => {
        this.cardsService.form.reset();
      });
  }
}
