import { Message } from "./message.model";

export interface Card {
    id?: string
    recipient: string
    email: string
    sender: string
    type: string
    scheduledTime: {
        day: number
        month: number
        year: number
    }
    messages: Message[]
}
