var balanceManager = require('./balanceManager');

var coins = { 'p': 1, 'n': 5, 'd': 10, 'q': 25 }
var coinsByAmount = ['q', 'd', 'n', 'p'];
	
module.exports = {

	convertToChange: function(amount) {

		var change = [];

		for(var i in coinsByAmount){
		
		      var coinType = coinsByAmount[i];
		      var coinValue = coins[coinType];

		      while(amount >= coinValue){
		        change.push(coinType);
		        amount -= coinValue;
		      }
		    }
		    return change;
	
		// while(amount > 0) {

		// 	if(amount >= 25){
		// 		var q = getQuarters(amount);
		// 		change.push(`${q.coins} ${coinsByAmount[0]}`)
		// 		amount -= q.discount;
		// 		console.log(amount);
		// 	}

		// 	if(amount >= 10 && amount < 25){
		// 		var d = getDimes(amount);
		// 		change.push(`${d.coins} ${coinsByAmount[1]}`)
		// 		amount -= d.discount;
		// 		console.log(amount);
		// 	}

		// 	if(amount >= 5 && amount < 10){
		// 		var n = getNickels(amount);
		// 		change.push(`${n.coins} ${coinsByAmount[2]}`)
		// 		amount -= n.discount;
		// 		console.log(amount);
		// 	}

		// 	if(amount < 5){
		// 		var p = getPennies(amount)
		// 		change.push(`${p.coins} ${coinsByAmount[3]}`)
		// 		amount -= p.discount;
		// 		console.log(amount);
		// 	}
		// }
    
	},

    getAmount: function(coinType) {
   
	    if(coinType == 'p'){
	    	return 1;
	    } else if(coinType == 'n') {
	    	return 5;
	    } else if(coinType == 'd') {
	    	return 10;
	    } else if(coinType == 'q') {
	    	return 25;
	    } else {
			throw new Error('Unrecognized coin ' + coinType);
	    }

  	}

 //  	getQuarters: function(cents){
  		
 //  		var coins = Math.round(cents/25);
 //  		console.log(coins);
	// 	return { 
 //  			coins: coins, 
 //  			discount: Number( getAmount('q') * coins)
 //  		};
 //  	}, 

 //  	getDimes: function(cents){

 //  		var coins = Math.round(cents/10);
	// 	return { 
 //  			coins: coins, 
 //  			discount: Number( getAmount('d') * coins)
 //  		};
	// },

 //  	getNickels: function(cents){

 //  		var coins = Math.round(cents/5);
	// 	return { 
 //  			coins: coins, 
 //  			discount: Number( getAmount('n') * coins)
 //  		};

 //  	},

 //  	getPennies: function(cents){

 //  		var coins = Math.round(cents/25);
	// 	return { 
 //  			coins: coins, 
 //  			discount: Number(getAmount('p') * coins)
 //  		};

 //  	}
};