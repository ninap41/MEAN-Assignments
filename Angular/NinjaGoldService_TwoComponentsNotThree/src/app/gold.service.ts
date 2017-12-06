import { Injectable } from '@angular/core';

@Injectable()
export class GoldService {
  gold: number = null;
  log : Array<number|string> =[];
  constructor() { }

  retrieveGold(): number{
    return this.gold;
  }

  retrieveLog():  Array<number|string> {
    return this.log;
  }

  sumGold(sum: number)
  {
    this.gold +=sum;
    sum = this.gold;
    return sum
  }
  // pushLog(log : any){
  //   console.log(log)
  //   return this.log.push(log);
  // }

}
