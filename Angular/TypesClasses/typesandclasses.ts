var myNum: number = 5;
var myString: string = "Hello Universe";


var arrayOfNumbers=[1,2,3,4];
var myArr: Array<number> =[1,2,3,4];
var arrayOne : Array<boolean> = [true, false, true, true];
var arrayTwo : Array<number | string | boolean> =[1, 'abc', true, 2];
// const myObj = { name:'Bill'};
var myObj : object = { name:'Bill'};
var anything: any = "Hey there chump, this stuff is pretty wild huh?";
var anything: any = 25; 


var myObj : object = { x: 5, y: 10 };
// // object constructor
class MyNode  {
  value: number;
  left:object;
  right:object;
  _priv:number;
  constructor (valueP: number){
    this.value = valueP;
  }
  doSomethingFun(){
		console.log("This is FUN!");
	}
}
let myNodeInstance = new MyNode(1);
console.log(myNodeInstance.value);

function myFunction():void {
    console.log("Hello World");
    return;
}
function sendingErrors():never{
	throw new Error('Error message');
}
