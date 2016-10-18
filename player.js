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
	 var all_hits = [];
	 var ammo = this.getShots();
	 
	 document.addEventListener('DOMContentLoaded', function() {
		 var hit;
		 var inputXY = document.createElement('input');
		 inputXY.setAttribute("id", "inp-y");
		 inputXY.setAttribute("placeholder", "ENTER COORDINATES");
		 inputXY.style = "color: black"
		 inputXY.style = "margin-left: 540px"
		 inputXY.className = "input";
		 var button = document.createElement('button');
		 button.setAttribute("id", "btn");
		 button.className = "btn";
		 button.innerHTML = "shoot";
		 var hits_counter_html = document.getElementById('missed_hits-counter');
		 var ammo_counter_html = document.getElementById('ammo-counter');
		 var ships_counter_html = document.getElementById('deadShips-counter');
		 
		 document.body.appendChild(inputXY);
		 document.body.appendChild(button);
		 var hits_counter = 0;
		 var missed_shots = 0;
		 
			button.addEventListener('click', function() {
				var id_hit_cell = inputXY.value; //id
				
				var hit = document.getElementById(id_hit_cell); //dom element
				
				
				
				if (all_hits.indexOf(hit.id) == -1) {
					if (hit.classList.contains('ShipIsSailing')) {
						hits_counter++;
						hit.className = "cell shipIsHit";
						hit.innerHTML = "2";
						ammo--;
						ammo_counter_html.innerHTML = ammo;
						alert("A ship is hit");
						
					}  else  {
						hit.className = "cell missed";
						alert("You missed");
						missed_shots++;
						hits_counter_html.innerHTML = missed_shots;
						
						ammo--;
						ammo_counter_html.innerHTML = ammo;
						 
					}
				}
				all_hits.push(hit.id);
					if (numberOfDeadShips <= 3) {
						for (var int = 0; int < arr.length; int++) {
							if(arr[0].innerHTML == 2 && arr[1].innerHTML== 2 && arr[2].innerHTML == 1){
								numberOfDeadShips++;
								hips_counter_html.innerHTML = numberOfDeadShip;
								console.log("one ship sunk");
								arr[0].innerHTML = 3;
								arr[1].innerHTML=3;
								arr[2].innerHTML = 3;
							}
							if(arr[3].innerHTML == 2 && arr[4].innerHTML== 2 && arr[5].innerHTML == 2){
								numberOfDeadShips++;
								hips_counter_html.innerHTML = numberOfDeadShip;
								console.log("one ship sunk");
								arr[2].innerHTML = 3;
								arr[3].innerHTML=3;
								arr[4].innerHTML = 3;
							}
							if(arr[6].innerHTML == 2 && arr[7].innerHTML== 2 && arr[8].innerHTML == 2){
								numberOfDeadShips++;
								hips_counter_html.innerHTML = numberOfDeadShip;
								console.log("one ship sunk");
								arr[5].innerHTML = 3;
								arr[6].innerHTML=3;
								arr[7].innerHTML = 3;
							}
						} 
						
					} else {
						return;
					}
					
					if (numberOfDeadShips == 3) {
						 game_over = true;
						 console.log("Game Over");
						 alert("Game Over!");
					} 
					
					 if (ammo == 0) {
							game_over = true;
							alert("Game Over!");
							for (var int = 0; int < arr.length; int++) {
								if (!(arr[int].innerHTML == 2)|| !(arr[int].innerHTML == 3)) {
									arr[int].className = "cell ShipIsSTILLSailing"
								}
									
							}
					}
				}, false);
			}, false);
}
 
 var player = new Player(20);
 player.makeShot();
