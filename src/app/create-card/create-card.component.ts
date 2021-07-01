import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardsService, DEFAULT_CARD } from '../services/card.service';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {
  card: any;
  id!: string;
  modalVisible: boolean = false;

  constructor(
    public cardsService: CardsService,
    private emailService: EmailService,
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
        this.cardsService.messageForm.reset();
        this.modalVisible = true;

        this.emailService.scheduleEmail(this.card);
        this.router.navigate(['add-wishes', this.id]);
        /// http://localhost:4200/add-wishes/mg2Ra5oyVxBQcQ0cs43G TODO: show on modal
      });
  }
}
