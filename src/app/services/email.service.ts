import { Injectable } from "@angular/core";
import { Card } from '../models/card.model';
import { HttpClient } from "@angular/common/http";

interface RequestBody {
  toEmail: string
  date: string
  month: string
  hour: string
  minute: string
  cardUrl: string
}

@Injectable({
  providedIn: "root"
})
export class EmailService {  
  constructor(private http: HttpClient) { }

  emailUrl: string = 'http://127.0.0.1:3000/scheduleEmail';
  
  scheduleEmail(card: Card) {
    let cardData: RequestBody = {
      toEmail: card.email,
      date: card.scheduledTime?.getDay().toString() || '',
      month: card.scheduledTime?.getMonth().toString() || '',
      hour: card.scheduledTime?.getHours().toString() || '',
      minute: (card.scheduledTime?.getMinutes() + 3).toString() || '',
      cardUrl: 'http://localhost:4200/view-card/' + card.id
    }
    console.log("email before");

    this.http.post<RequestBody>(this.emailUrl, cardData, {headers:{ "content-type": 'application/json'}})
      .subscribe(() => {console.log("email inside")});

    console.log("email after");
  }
}
