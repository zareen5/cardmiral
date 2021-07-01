import { Message } from "./message.model";

export interface Card {
    id?: string
    recipient: string
    email: string
    sender: string
    type: string
    scheduledTime: Date
    messages: Message[]
}


export interface NewCard {
    creatorEmail: string;
    card: Card;
    toEmail: string;
    introMessage: string;
    expiryData: Date;
}