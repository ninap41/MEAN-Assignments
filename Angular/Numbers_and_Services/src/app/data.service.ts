import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  numbers: number[] = [1, 2, 3,5,6,7,8,9, 10];
  // sumnum: number =0;

  constructor() { }
  retrieveNumbers(): number[]
{
  return this.numbers;
}


addNumber(num: number)
{
  return this.numbers.push(Math.floor(Math.random() * 20));
 
}

popNumber(num: number)
{
  return this.numbers.splice(num, 1);
}
sumNumber(num: number)
{
var sum = 0;
  for(let idx = 0; idx< this.numbers.length; idx++){
    sum += this.numbers[idx];
  }
  num =sum
  return num;
}

}
