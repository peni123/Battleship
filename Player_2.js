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
 
 Player.prototype.makeShot = function() {
	
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

		 Player.prototype.shoots.call(this);
		 Player.prototype.checkShipStatus.call(this);
		 Player.prototype.checkAmmoStatus.call(this);
		 
	 }, false);
	 
}
Player.prototype.shoots = function () {
	document.addEventListener('click', function() {
		button.addEventListener('click', function() {
			var id_hit_cell = inputXY.value;
			 var hit = document.getElementById(id_hit_cell);
			 var hits_counter = 0;
			 var missed_shots = 0;
			 var ammo = this.getShots();
				if (document.getElementById(inputXY.value).classList.contains('ShipIsSailing')) {
					hit.className = "cell shipIsHit";
					hits_counter ++;
					ammo--;
					return hit, hits_counter, ammo;
					alert(hits_counter);
				} else {
					hit.className = "cell missed";
					missed_shots++;
					ammo--;
					alert(missed_shots);
					return hit, missed_shots, ammo;
				}
				
				}, false);
	}, false)
}
 
 Player.prototype.checkShipStatus = function() {
	 var hit_part_ofShip = hit/*Player.prototype.shoots.call(this, hit)*/;
	 var x_coordinate_next_up = String.fromCharCode(hit_part_ofShip.charAt(0).charCodeAt() + 1)
	 var y_coordinate_next_up = hit_part_ofShip.substr(1) + 1;
	 var xy_next_up = x_coordinate_next_up+y_coordinate_next_up;
	 
	 var x_coordinate_next_down = String.fromCharCode(hit_part_ofShip.charAt(0).charCodeAt()- 1)
	 var y_coordinate_next_down = y_coordinate_next_up -2;
	 var xy_next_down = x_coordinate_next_down + y_coordinate_next_down;
	 
	 var hit_other_partOfShip1 = document.getElementById(xy_next_up);
	 var hit_other_partOfShip2 = document.getElementById(xy_next_down);
	 
		 if (hit_other_partOfShip1.classList.contains('shipIsHit') &&
			hit_other_partOfShip2.classList.contains('shipIsHit'))  {
			
			 hit_part_ofShip.className = "cell shipIsWreck";
			 hit_other_partOfShip1.className = "cell shipIsWreck";
			 hit_other_partOfShip2.className = "cell shipIsWreck";
			 Ship.protoype.set_isDead = function() { 
					__isDead = true;
				}
			 alert ("A ship has just sunk")
		}
 
 return;
 }
 Player.prototype.checkAmmoStatus = function() {
	if (ammo == 0) {
		game_over = true;
	}
}
 var player = new Player(20);
 player.makeShot();
