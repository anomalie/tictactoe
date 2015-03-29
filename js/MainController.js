(function (){

	angular
		.module('ttcApp', [])
		.controller('mainController', mainController);

//set functions 
		function mainController(){
			var self = this;
			self.setBackgroundColor = setBackgroundColor;
			self.playerOne =[{name:""}];
			self.playerTwo =[{name:""}];
			self.Array = [
				{circle: 1},
				{circle: 2},
				{circle: 3},
				{circle: 4},
				{circle: 5},
				{circle: 6},
				{circle: 7},
				{circle: 8},
				{circle: 9}
				];

			self.winner = function(array) {

			if ( 

				 array[0] == 'X' && array[1] == 'X' && array[2] == 'X' ||
			     array[3] == 'X' && array[4] == 'X' && array[5] == 'X' ||
			     array[6] == 'X' && array[7] == 'X' && array[8] == 'X' ||
			     array[0] == 'X' && array[4] == 'X' && array[8] == 'X' ||
			     array[2] == 'X' && array[4] == 'X' && array[6] == 'X' ||
			     array[0] == 'X' && array[3] == 'X' && array[6] == 'X' ||
			     array[1] == 'X' && array[4] == 'X' && array[7] == 'X' ||
			     array[2] == 'X' && array[5] == 'X' && array[8] == 'X'
			 	
				 ){
			
				return true;
			} else if (

				 array[0] == 'O' && array[1] == 'O' && array[2] == 'O' ||
			     array[3] == 'O' && array[4] == 'O' && array[5] == 'O' ||
			     array[6] == 'O' && array[7] == 'O' && array[8] == 'O' ||
			     array[0] == 'O' && array[4] == 'O' && array[8] == 'O' ||
			     array[2] == 'O' && array[4] == 'O' && array[6] == 'O' ||
			     array[0] == 'O' && array[3] == 'O' && array[6] == 'O' ||
			     array[1] == 'O' && array[4] == 'O' && array[7] == 'O' ||
			     array[2] == 'O' && array[5] == 'O' && array[8] == 'O'

				) {
			
				return true;
			} else {
				return false;	
			}
		}
		}
// After 'X' or 'O' is pushed into array
// need function to look at same index position, and set style according to if it's an
// X or O

		function setBackgroundColor(){
			var self = this
			self.style.background = "yellow";


		}

		//ng repeat
		//ng-models within the square 


// function resets game


})();






