//__________________Deck________________________________

class Deck{
    constructor(){
        var deck = new Array();
    }
    show_cards_reset(){
        this.deck=[];
        const suits = ['Hearts','Clubs','Spades','Diamonds'];
        const values= [' Ace',2,3, 4,5,6,7,8,9,10,' Jack',' Queen',' King'];

        for(var suit of suits){ //typeof
            for(var value of values){    
            this.deck.push(` ${value} of ${ suit }`);
            }
        }
        return this;
    }
    shuffle(){ //THE OVER9000 SHUFFLE with a tempppp :)
        for (var i = 0; i < 9001; i++)
        {
            var x = Math.floor((Math.random() * this.deck.length));
            var z = Math.floor((Math.random() * this.deck.length));
            var tmp = this.deck[x];
            this.deck[x] = this.deck[z];
            this.deck[z] = tmp;
        }
        return this;
    }

    deal(){
        this.deck.pop();
        // var card = deck[this.deck.length-1];
        // this.deck.splice(this.deck.length-1, 1);
        // return card;
        return this.deck.pop();
    }
}
    ///render for later
    // renderDeck()
    // {
    //     for(var i = 0; i < deck.length; i++)
    //     {
    //         var card = document.createElement("div");
    //         var value = document.createElement("div");
    //         var suit = document.createElement("div");
    //         card.className = "card";
    //         value.className = "value";
    //          suit.className = "suit " + this.deck[i].Suit;
    
    //         value.innerHTML = this.deck[i].Value;
    //         card.appendChild(value);
    //         card.appendChild(suit);
    
    //         document.getElementById("deck").appendChild(this.card);
        
   
    

//__________________Deck________________________________

//__________________PLAYER________________________________

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }
    draw_full_Hand(deck) {
        for(var i= 0; i <8; i++){
            this.hand.push(deck.deal() + "\n");
        }
        console.log(this.name + " has drawn (7) of this hand:" + "\n")
        return this.hand;
    }
 

    draw(deck) {
        if(this.hand.length > 6){
            return this.name + " has attempted to draw a card!" + "\n" + " ....But they have too many cards in their hand!"; 

        }
        else{
        this.hand.push(deck.deal());
        return this.name + " just drew" + this.hand[this.hand.length-1] + " from the deck!"+ "\n";
        }
    }

    discard() {
        if(this.hand.length > 0){
            var cardIndex = Math.floor(Math.random() * this.hand.length)
            var discarded = this.hand.pop(this.hand[cardIndex])
            console.log("Hey, " + this.name + " has discarded " + discarded);
        }
        if(this.hand.length === 1){
            console.log("Hey, " + this.name + ". That's Your Last Card! Don't Discard it yet!");
        }
            return "After discarding, her hand is now.." + "\n" +  this.hand;
    }
}

//__________________PLAYER________________________________


console.log("wWlcome to Deck of Cards" + "\n" +"~~~~~~~~~~~~~~~~~~~~~~~");
let Nina = new Player("Nina");
const deck = new Deck();
deck.show_cards_reset()
console.log(deck.show_cards_reset().shuffle());
console.log("\n"+ "...We Have Shuffled the cards.")

console.log( Nina.draw_full_Hand(deck) + "\n");
console.log( "\n" + Nina.draw(deck));
console.log( "\n" + Nina.discard(deck));
console.log( "\n" + Nina.discard(deck));
console.log( "\n" + Nina.discard(deck));
console.log( "\n" + Nina.discard(deck));
console.log( "\n" + Nina.draw(deck));


