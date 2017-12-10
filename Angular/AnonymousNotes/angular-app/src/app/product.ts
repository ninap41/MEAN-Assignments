

export class Product {
    constructor(
        public id: number = null,
        public description: string = '',
         public created_at: Date = new Date(),
    ) {}
}