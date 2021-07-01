import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../models/card.model';
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
    type: 'Happy BirthDay',
    scheduledTime: new Date(2020, 7, 1),
    messages: []
  }

  exampleCardB: Card = {
    id: 'test-id',
    recipient: 'Wumi',
    email: 'ola@mail.com',
    sender: 'Mark', 
    type: 'Congratulations',
    scheduledTime: new Date(2020, 7, 1),
    messages: []
  }


  constructor(private cardsService: CardsService, private router: Router  ) { }

  ngOnInit(): void {
  }

  goToCard(val: string) {
    this.router.navigate(['new-card', val]);
  }



  // TODO added for testing puposes
  public createCard(example: Card) {
    this.cardsService.createCard(example);
  }
}
