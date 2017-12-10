import { User } from './user';  


export class Product {
    constructor(
        public id: number = null,
        public productname: string = '',
        public description: string = '',
        public price: number = 0,
        public MadeByUser: User = null
        // public imgUrl: string = null
    ) {}
}