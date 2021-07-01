import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../models/card.model';
import { CardsService, DEFAULT_CARD } from '../services/card.service';
import { EmailService } from '../services/email.service';
import { MatDialog } from '@angular/material/dialog';
import { LinkModalComponent } from '../components/link-modal/link-modal.component';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {
  card: any;

  constructor(
    public cardsService: CardsService,
    private emailService: EmailService,
    private route: ActivatedRoute,
    public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.card = DEFAULT_CARD;
    this.card.type = this.route.snapshot.paramMap.get('type');
  }

  openDialog(url: string) {
    this.dialog
      .open(LinkModalComponent, { data: "http://localhost:4200/add-wishes/" + url})
      .afterClosed().subscribe(() => {});
  }

  onSubmit(){
    let data: Card = {...this.card, ...this.cardsService.cardForm.value};
    this.cardsService.createCard(data)
      .then(res => {
        data.id = res.id;
        this.cardsService.reset();

        this.emailService.scheduleEmail(data).subscribe(() => {
          this.openDialog(res.id);
        });
      });
  }
}
