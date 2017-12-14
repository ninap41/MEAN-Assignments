import { User } from './user';  


export class Product {
    constructor(
        public id: number = null,
        public postedBy : string = '',
        public productname: string = '',
        public description: string = '',
        public price: number = 1,
        public MadeByUser: User = null,
        // public img: string = null
    ) {}
}