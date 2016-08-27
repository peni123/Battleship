function Grid (rows, cells){
	var _rows = rows;
	var _cells = cells;
	
	this.getRows = function () {
		return _rows;
	}
	this.getCells = function() {
		return _cells;
	}
	this.setRows = function(newRows) {
		_rows = rows;
	}
	this.setCells = function(newCells) {
		_cells = cells;
	}
}

Grid.prototype.drawGrid = function() {
	
	var rows_number = this.getRows();
	var cells_number = this.getCells();
	
	document.addEventListener('DOMContentLoaded', function() {
		var grid = document.createElement('div');
		grid.setAttribute("id", "grid");
		document.body.appendChild(grid);
			for (var int = 0; int < rows_number; int++) {
				for (var j = 0; j < cells_number; j++) {
					var cell = document.createElement('div');
					cell.setAttribute("class", "row");
					var rowIds = ["A","B","C","D","E","F","G","H","J","K","L","M","N","O","P","Q","R","S","T","U","F"]
						cell.innerHTML = "0";
						cell.className= "cell";
						var cellId = rowIds[j] + int +j;
						cell.setAttribute("id", cellId);
						cell.innerHTML = cellId;
						grid.appendChild(cell);
				}
			}	
		
	}, false);
}

var grid = new Grid(20, 20);
grid.drawGrid();

















