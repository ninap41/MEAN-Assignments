import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  gold: number = null;
  log : Array<string>=[];

  constructor() { }

  retrieveGold(): number{
    return this.gold;
  }

  retrieveLog():  Array<string>{
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
