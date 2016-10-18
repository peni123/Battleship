function Ship () {
};


Ship.prototype.buildShip = function () {
	var ship = this;
	arr = [];
	document.addEventListener('DOMContentLoaded', function() {
	var ship_whole = [];	
	var arrX = ["A","B","C","D","E","F","G","H","J","K","L","M","N","O","P","Q","R","S"];
	var z = Math.floor(Math.random()*arrX.length);
	console.log(z);
	var x = arrX[z];
	
	
	var y = Math.floor(Math.random()*(0 - 18)+18);
	
	
	shipId1 = x + y + z;
	
	console.log(shipId1);
	
	shipId2 = x + (y+1) + z;
	
	shipId3 = x + (y+2) + z;
	
		var ship_part1 = document.getElementById(shipId1);
		
		var ship_part2 = document.getElementById(shipId2);
		
		var ship_part3 = document.getElementById(shipId3);
		
		ship_part1.className = "cell ShipIsSailing";
		ship_part2.className = "cell ShipIsSailing";
		ship_part3.className = "cell ShipIsSailing";
		arr.push(ship_part1, ship_part2, ship_part3);
		
		
	}, false)
	
}


var ship1 = new Ship (1);
ship1.buildShip();

var ship2 = new Ship (1);
ship2.buildShip();

var ship3 = new Ship (1);
ship3.buildShip();
