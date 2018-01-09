import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; //Other Client Module?
import { HttpClient} from '@angular/common/http'; //Client Module
import 'rxjs/add/operator/map';    //RXJS operator Reactive. Same as Observable
import 'rxjs/add/operator/toPromise'; //eventual result of an asynchronous operation "TOPROMISE".
import {Human} from './human'

@Injectable()
export class DataService {
  Product: string = null;
 WeaponList: any[] = [];
gameStart = false
Player = {
  name: '',
  race: '',
  health: 100,
  lvl: 1,
  speed: 10,
  strength: 10,
  Weapon: '',
  gold: 50,
  Bag: ['Lambas bread, Calling Horn'],
  backstory: ''
}
 enemyList = ['Bagdul The Troll', 'Aranoth The Spider', 'Tim The Imp', 'The Broken Wizard', 'The Bog Beserker', 'Oran The Orc', 'Wretching Witch','Slime Sloth', 'Urakai', 'Bethren the  Lost Brethren']
weaponList= ['Elvin Bow', 'Sialas Lost Sword', 'KingsPin','Average Mace','Longsword','Wizards Rod', 'Duel Swords', 'Average Bow', 'Dwarven Axe']
Gold: null;
Bag;





  constructor() { }


  startGame(){
    return this.gameStart;
  }

  retrievePlayer(){
    return this.Player
  }

  retrieveWeapons():  Array<string>{
    return this.WeaponList;
  }
  retrieveBag():  Array<string>{
    return this.Bag
  }

  createProduct(product: any):  any
  {
    return this.WeaponList.push(product);

  }

  createPlayer(choice){
    if(choice.race == "Human" ){
      const beginningList1 = ['Basic Sword','Pathetic Stick','Breaking Bow','Your Bare Hands','Silly Mace'] 
      this.Player.health = Math.floor(Math.random()* (100 - 85) + 85)
      this.Player.lvl = 1
      this.Player.speed =  Math.floor(Math.random()* (14 - 8) + 8);
      this.Player.strength = Math.floor(Math.random()* (12 - 8) + 8)
      this.Player.Weapon = beginningList1[Math.floor(Math.random()* beginningList1.length)]
      this.Player.gold =  Math.floor(Math.random()* (70 - 40) + 40)
      this.Player.Bag = ['Fathers Sword', 'Horn']

    }
    if(choice.race == "Elf" ){
      const beginningList2 = ['Elronds Spear','Legolas Bow','Duel Knives'] 
      this.Player.health = Math.floor(Math.random()* (110 - 85) + 85)
      this.Player.lvl = 1
      this.Player.speed =  Math.floor(Math.random()* (16 - 8) + 8);
      this.Player.strength = Math.floor(Math.random()* (14 - 8) + 8)
      this.Player.Weapon = beginningList2[Math.floor(Math.random()* beginningList2.length)]
      this.Player.gold =  Math.floor(Math.random()* (70 - 40) + 40)
      this.Player.Bag = ['Lambas Bread', 'Cape of Lothrien']

      
    }
    if(choice.race == "Dwarf" ){
      const beginningList3 = ['Golins Axe','Rusty Mace', 'Cave Trolls Spear'] 
      this.Player.health = Math.floor(Math.random()* (115 - 90) + 90)
      this.Player.lvl = 1
      this.Player.speed =  Math.floor(Math.random()* (10 - 6) + 6);
      this.Player.strength = Math.floor(Math.random()* (20 - 10) + 10)
      this.Player.Weapon = beginningList3[Math.floor(Math.random()* beginningList3.length)]
      this.Player.gold =  Math.floor(Math.random()* (70 - 40) + 40)
      this.Player.Bag = ['Mead', 'Sturdy Horned Helmet']
      
    }
    if(choice.race == "Wizard" ){
      const beginningList4 = ['Staff of Dark','Staff of Light', 'Average Wizard Staff','Average Wizard Staff','Average Wizard Staff', 'Average Wizard Staff'] 
      this.Player.health = Math.floor(Math.random()* (120 - 80) + 80)
      this.Player.lvl = 1
      this.Player.speed =  Math.floor(Math.random()* (10 - 6) + 6);
      this.Player.strength = Math.floor(Math.random()* (18 - 12) + 12)
      this.Player.Weapon = beginningList4[Math.floor(Math.random()* beginningList4.length)]
      this.Player.gold =  Math.floor(Math.random()* (70 - 40) + 40)
      this.Player.Bag = ['River Water of Healing', 'Plain Wizarding Robes']
      
      
    }
    this.Player.name = choice.name
    // document.body.innerHTML = this.Player.Weapon ;
  }

}
