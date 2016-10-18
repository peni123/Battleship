 var game_over = false;
 
function Player (shots) { //number of shots
	var _shots = shots; 
	this.setShots = function (nShot) {
		_shots = nShot;
	}
	this.getShots = function() {
		return _shots;
	}
 }
var hit_ships = [];
var ship_isDead = false;
var numberOfDeadShips = 0;
 Player.prototype.makeShot = function() {
	 var ammo = this.getShots();
	 document.addEventListener('DOMContentLoaded', function() {
		 var hit;
		 var inputXY = document.createElement('input');
		 inputXY.setAttribute("id", "inp-y");
		 inputXY.setAttribute("placeholder", "  enter value for X and Y");
		 inputXY.className = "input";
		 var button = document.createElement('button');
		 button.setAttribute("id", "btn");
		 button.className = "btn";
		 button.innerHTML = "shoot";
		 var target = document.createElement('img');
		 target.setAttribute("src", "target.png");
		 var text = document.createElement('p');
		 text.setAttribute("id", "text");
		 text.innerHTML = "The coordinates of X must include one letter between A and U in uppercase and th coordinates of Y one number between 0 and 18. Please enter the coordinates without space between them - for example: A11";
		 
		 document.body.appendChild(inputXY);
		 document.body.appendChild(button);
		 document.body.appendChild(target);
		 document.body.appendChild(text);
		
		 var hits_counter = 0;
			button.addEventListener('click', function() {
				var id_hit_cell = inputXY.value;
				var hit = document.getElementById(id_hit_cell);
				
				var missed_shots = 0;
				var ship_is_hit_firstTime = {};
					if (hit.classList.contains('ShipIsSailing')) {
						hits_counter++;
						hit.className = "cell shipIsHit";
						hit.innerHTML = "1";
						ship_is_hit_firstTime.id = hit.id;
						ship_is_hit_firstTime.className = "cell shipIsHit"; 
						
						ammo--;
						alert(hits_counter); //hits counter = hit_ships.lenght
					/*} else if (!hit.classList.contains('ShipIsSailing') || !hit.classList.contains('shipIsWreck') ){
						hit.className = "cell missed";
						missed_shots++;
						ammo--;
						alert(missed_shots);
						
					}*/
						 var hit_id = String(ship_is_hit_firstTime.id);
						/* console.log(hit_id);
						 hit_ships.push(hit_id);
						 hit_ships.sort();
						 console.log(hit_ships.length);*/
						 
						 
					
						/* for (var int = 0; int < hit_ships.length; int++) {*/
							 
							/* console.log(ship1.getState());
							 console.log(ship2.getState());
							 console.log(ship3.getState());*/
								 /*var id1 = hit_ships[int];
									console.log(id1);
									var id2 = hit_ships[int+1];
									console.log(id2);
									var id3 = hit_ships[int+2];
									console.log(id3);*/
						 var shps_to_check = document.getElementsByClassName("shipIsHit");
							
							 console.log(shps_to_check);
							 for (var i = 0, len = shps_to_check; i < len; i++) {
								 console.log(shps_to_check[i]);
									if (shps_to_check[i].innerHtml == "1" &&
											shps_to_check[i+1].innerHtml == "1" &&
											shps_to_check[i+2].innerHtml == "1" ){
										 ship_isDead = true;
										 console.log(ship_isDead);
										 numberOfDeadShips++;
										 console.log(numberOfDeadShips);
									 }
							 }
								/*if (hit_ships[int] == hit_id.charAt(0) + (parseInt(hit_id.substr(1))-1 )) {  
									document.getElementById(hit_ships[int]).className = "cell shipIsWreck";*/
								/*}*/
								
							
						 
							/*	if  (hit_ships.length == 0) {
									hit.className = "cell missed";
									
								}
								if  (hit_ships.length == 0) {
									hit.className = "cell missed";
									
								}*/
							
							 if (numberOfDeadShips == 9) {
								 game_over = true;
								 console.log("Game Over");
							}
						
					
					 if (ammo == 0) {
							game_over = true;
						}
					} 
				}, false);
			}, false);
	 
}

 
 var player = new Player(20);
 player.makeShot();
/**
 * 
 */
 elementList = document.querySelectorAll("shipIsHit");
 for (var i = 0; i <  elementList.length; i++) {	
	 
	 
 }
 var hit_ships_sorted = [];
 for (var i = 0; i < hit_ships.length; i++) {	
	 
	 hit_ships[i].nodeValue.slice(0,3);
 } 
 console.log(hit_ships);
 for (var i = 0; i < hit_ships.length; i++) {	
	 for (var j = 0; j < hit_ships.length; j++) {	 
		 
			 if(hit_ships[j].charAt(0) == hit_ships[j++].charAt(0)&&
				( hit_ships[j].substr(1) > hit_ships[j++].substr(1))){	 
			 
				 hit_ships_sorted.push(hit_ships[j++]);
				 hit_ships.slice(hit_ships[j++])
			 }
			 if(hit_ships[j].charAt(0) == hit_ships[j++].charAt(0)&&
						( hit_ships[j].substr(1) < hit_ships[j++].substr(1))){	 
					 
						 hit_ships_sorted.push(hit_ships[j]);
						 hit_ships.slice(hit_ships[j])
					 }
	 
	 } 
 }
 console.log(hit_ships_sorted);
for (var i = 0; i <  hit_ships_sorted.length; i++) {	
						 
	 hit_ships_sorted[i] += "div#";
}  
console.log(hit_ships_sorted);
