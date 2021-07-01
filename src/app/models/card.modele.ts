import { Message } from "./message.model";

export interface Card {
    id: string
    recipient: string
    email: string
    sender: string
    scheduledTime: Date
    messages: Message[]
}
