
/*
function Game () {

}
var gameBattleship = new Game ();


	gameBattleship.startGame();
	
		if (game_over == true) {
			gameBattleship.reviewResults();
			gameBattleship.endGame();
		}



Game.prototype.startGame = function() {
	
	var grid = new Grid(20, 20);
	grid.drawGrid();
	
	var ship1 = new Ship ();
	ship1.buildShip();

	var ship2 = new Ship ();
	ship2.buildShip();

	var ship3 = new Ship ();
	ship3.buildShip();
	
	var player = new Player(20);
	 player.makeShot();
}

Game.prototype.reviewResults = function() {
	var text = document.createElement('div');
	text.setAttribute("id", "text");
	 text.className = "text";
	
	var content =  "Number of missed shots: " + missed_shots + "\n"  + " Number of sunk ships: " + numberOfDeadShips + "\n"
	+ "Number of ammo left: " + ammo;
	 text.innerHTML = content;
	 text.style = "display: block";
}	
*//**
 * 
 */