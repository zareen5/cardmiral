import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';
import { Card } from '../models/card.model';
import { Message } from '../models/message.model';

const COLLECTION_NAME: string = "cards";

export const DEFAULT_CARD: Card = {
  recipient: '',
  email: '',
  sender: '',
  type: '',
  scheduledTime: {
    day: 2,
    month: 7,
    year: 2021
  },
  messages: []
}

@Injectable({
  providedIn: "root"
})
export class CardsService {  
  constructor(private db: AngularFirestore) { }
  
  cardForm = new FormGroup({
    recipient: new FormControl(''),
    email: new FormControl(''),
    sender: new FormControl(''),
    scheduledTime: new FormControl({day: 2, month: 7, year:2021})
  });

  messageForm = new FormGroup({        
    message: new FormControl(''),
    signature: new FormControl('')
  })

  reset() {
    this.cardForm.reset();
    this.messageForm.reset();
  }
  
  createCard(card: Card) {
    return this.db.collection(COLLECTION_NAME).add({...DEFAULT_CARD, ...card});
  }

  retrieveCard(cardId: string) {
    return this.db.collection(COLLECTION_NAME).doc(cardId).snapshotChanges();
  }

  addMessage(cardId: string, currentCard: Card, newMessage: Message) {
    return this.db.collection(COLLECTION_NAME).doc(cardId).set(
      { messages: currentCard.messages.concat(newMessage)}, {merge: true}
    )
  }
}
