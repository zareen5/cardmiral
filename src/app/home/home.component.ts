import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.modele';
import { CardsService } from '../services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  exampleCardA: Card = {
    id: 'test-id',
    recipient: 'Ola',
    email: 'ola@mail.com',
    sender: 'Mark',
    type: 'Congratulations',
    scheduledTime: new Date(2020, 7, 1),
    messages: []
  }

  exampleCardB: Card = {
    id: 'test-id',
    recipient: 'Wumi',
    email: 'ola@mail.com',
    sender: 'Mark',
    type: 'Happy BirthDay',
    scheduledTime: new Date(2020, 7, 1),
    messages: []
  }

  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
  }

  // TODO added for testing puposes
  public createCard() {
    this.cardsService.createCard(this.exampleCardA);
  }

}
