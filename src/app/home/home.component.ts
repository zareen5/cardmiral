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

  coverImages: string[] = ['bday1', 'bday2', 'cong1', 'cong2'];

  exampleCards: Card[] = this.coverImages.map((type: string) => {
    return {
      recipient: '',
      email: '',
      sender: '',
      type: type,
      scheduledTime: {
        day: 2,
        month: 7,
        year: 2021
      },
      messages: []
    }});

  constructor(private cardsService: CardsService, private router: Router  ) { }

  ngOnInit(): void {
    //
  }

  goToCard(val: string) {
    this.router.navigate(['new-card', val]);
  }
}
