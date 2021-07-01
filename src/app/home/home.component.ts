import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { CardsService } from '../services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  exampleCards: Card[] = [
    {
      recipient: 'Olawumi',
      email: 'ola@mail.com',
      sender: 'Mark',
      type: 'Congratulations',
      messages: []
    },
    {
      recipient: 'Fatema',
      email: 'ola@mail.com',
      sender: 'Mark',
      type: 'Happy BirthDay',
      messages: []
    },
    {
      recipient: 'Safura',
      email: 'ola@mail.com',
      sender: 'Mark',
      type: 'Good Luck',
      messages: []
    }
  ];

  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
  }

  // TODO added for testing puposes
  public createCard(example: Card) {
    this.cardsService.createCard(example);
  }
}
