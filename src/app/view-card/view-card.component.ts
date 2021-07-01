import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService, DEFAULT_CARD } from '../services/card.service';
import { Card } from '../models/card.model';


@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.scss']
})
export class ViewCardComponent implements OnInit {
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
        this.selectedCard = res.payload.data() as Card;
      });
  }
}
