
module.exports = {

      add: function(num1, num2) { 
        var sum = num1 + num2;
        console.log("the sum of " +num1 + " and " + num2 + " is " + sum + "!");       
      },
      multiply: function(num1, num2){
        var sum = num1 * num2;
        console.log("The Product of " +num1 + " and " + num2 + " is " + sum + "!");       
      },
      square: function(num) {
        var square = num * num;
        console.log(num + " squared is " + square + "!");       
        
      },
      random: function(num1, num2) {
           console.log("*Getting Random* " + Math.floor((Math.random() * num1) + num2) + " (between " + num1 + " and " + num2 + ")!") 
      },
      pretty_divider: function(string){
        console.log(string);
      }
    
  }