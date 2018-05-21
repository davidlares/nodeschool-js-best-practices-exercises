// var vendingMachine = require('./vendingMachine.js');
var balance = 0;

module.exports = {

  increaseBalance: function(amount){
    balance += amount;
  },

  getBalance: function(){ 
    return balance;
  },

  canAfford: function(amount) {
    
    // var errorMessage;

    // if(!this.isValidAmount(amount)){
    //    var errorMessage = 'Invalid Input';
    // }
    
    // if(errorMessage){
    //   throw new Error(errorMessage);
    // }

    return amount <= balance;
  },
  
  decreaseBalance: function(amount){
   
    // var errorMessage;

    if(!this.canAfford(amount)){
         throw new Error('Insufficient balance');
    }
  
    // if(errorMessage){
    //    errorMessage);
    // }
    
    balance -= amount;
  
  },

  isValidAmount: function(amount){
    
    if(!amount){
      return false;
    } else {
      return true;
    }
  }

  

};