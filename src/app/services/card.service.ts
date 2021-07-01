import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';
import { Card } from '../models/card.modele';
import { Message } from '../models/message.model';

const COLLECTION_NAME: string = "cards";

@Injectable({
  providedIn: "root"
})
export class CardsService {  
  constructor(private db: AngularFirestore) { }

  createCard(card: Card) {
      return new Promise<any>((resolve, reject) =>{
        this.db.collection(COLLECTION_NAME).add(card).then(res => {}, err => reject(err));
    });
  }

  retrieveCard(cardId: string): Card {
    return this.db.collection(COLLECTION_NAME).doc(cardId) as any as Card;
  }

  addMessage(cardId: string, newMessage: Message) {
    const originalMessages: Message[] = this.retrieveCard(cardId).messages;

    return this.db.collection(COLLECTION_NAME).doc(cardId).set(
      { messages: originalMessages.push(newMessage)}, {merge: true}
    )
  }
}
