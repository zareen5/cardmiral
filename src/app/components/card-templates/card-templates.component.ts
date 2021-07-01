import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { DEFAULT_CARD } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-templates',
  templateUrl: './card-templates.component.html',
  styleUrls: ['./card-templates.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardTemplatesComponent implements OnInit {
  @Input()
  card: Card = DEFAULT_CARD;
  pagination = [0, 4, 8, 12];

  constructor() { }

  ngOnInit(): void {
    //
  }

  getCover() {
    if (this.card.type) {
      return 'assets/' + this.card.type + '.png';
    }
    else {
      return 'assets/blank.png';
    }
  }
}