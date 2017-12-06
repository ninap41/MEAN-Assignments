export class Quotes {
constructor(
    public id: number = null,
    public quote: string = "",
    public author: string = "",
    public vote: number = 0,
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
    ) {}
}
