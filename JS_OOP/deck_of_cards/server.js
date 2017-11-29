//__________________Deck________________________________

class Deck{
    constructor(){
        var deck = new Array();
    }
    show_cards_reset(){
        this.deck=[];
        const suits = ['Hearts \u{2665}','Diamonds \u{2666}'," Spades \u{2660}",'Clubs \u{2663}'];
        const values= [' Ace',2,3, 4,5,6,7,8,9,10,' Jack',' Queen',' King'];

        for(var suit of suits){ //typeof
            for(var value of values){ 
                if(`${value}` == ' Ace' && `${suit}` == 'Hearts \u{2665}'){
                    this.deck.push('\u{1F0B1}');
                }
                else{
            this.deck.push(` ${value} of ${ suit }`);
                }
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
    //CRAZY WAY TO SHUFFLE?????
    shuffle2() {
        for(var j, x, i = this.deck.length; i; j = parseInt(Math.random() * i), x = this.deck[--i], this.deck[i] = this.deck[j], this.deck[j] = x);
        return this.deck
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
        var hand_status= null;
        var wins = null;
        var losses = null;
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

    check_hand(){
       //one_pair
        // for(var i = 0; i < this.hand.length; i++){
        //     this.hand.pop(this.hand[0])
            return this.hand[0];

        
        // var tmp = tmp[`${i}`];
    }
   
}



//__________________PLAYER________________________________


console.log("Welcome to Deck of Cards" + "\n" +"~~~~~~~~~~~~~~~~~~~~~~~");
let Nina = new Player("Nina");
let Opposing_Player = new Player("Nina")
const deck = new Deck();
deck.show_cards_reset()
console.log(deck.show_cards_reset().shuffle2());
console.log("\n"+ "...We Have Shuffled the cards.")

console.log( Nina.draw_full_Hand(deck) + "\n");
console.log( "\n" + Nina.draw(deck));
console.log( "\n" + Nina.discard(deck));
console.log( "\n" + Nina.discard(deck));
console.log( "\n" + Nina.discard(deck));
console.log( "\n" + Nina.discard(deck));
console.log( "\n" + Nina.draw(deck));
console.log( "\n" + Nina.check_hand());


