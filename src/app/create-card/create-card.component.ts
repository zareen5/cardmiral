import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardsService, DEFAULT_CARD } from '../services/card.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {
  card: any;
  id!: string;

  constructor(
    public cardsService: CardsService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    this.card = DEFAULT_CARD;
    this.card.type = this.route.snapshot.paramMap.get('type');
   }

  revert (){}

  onSubmit(){
    let data = this.cardsService.cardForm.value;
    this.cardsService.createCard({...this.card, ...data})
      .then(res => {
        this.id = res.id;
        this.cardsService.cardForm.reset();
        this.router.navigate(['add-wishes', this.id]);
        this.cardsService.messageForm.reset();
      });
  }
}
