import { User } from './user';  


export class Battle {
    constructor(
        public id: number = null,
        public userTwo: User = null,
        public userOne: User = null,       
      ){}
    
}

