(function (){
	angular
		.module('ttcApp', ['firebase'])
		.controller('mainController', mainController);

	mainController.$inject = ['$scope', '$firebaseObject', '$firebaseArray'];

				//SET CONTROLLER FUNCTION & VARIABLES//
		function mainController($scope, $firebaseObject, $firebaseArray){
			var self = this;
			var ref= new Firebase("https://tictactoefbapp.firebaseio.com/");
				self.playerMove = playerMove;
				self.currentPlayer = 0 ;
				self.selectPlayer = selectTurn();
				self.switchTurn = switchTurn;
				self.getWinner= getWinner;
				self.newGame = newGame;
				self.Winner = 0;
				self.spaces = 9;
				self.board = [
				{circle: null }, {circle: null }, {circle: null },
				{circle: null }, {circle: null }, {circle: null },
				{circle: null }, {circle: null }, {circle: null }
				];
				// RESETS TO NEW GAME //
				function newGame() {
					self.currentPlayer = 1;
					self.Winner = 0;
					self.spaces = 9;
					self.board = [
					{circle: null }, {circle: null }, {circle: null },
					{circle: null }, {circle: null }, {circle: null },
					{circle: null }, {circle: null }, {circle: null }
					];

					}
				// SELECT TURN FUNCTION //
				function selectTurn(){
					self.currentPlayer = Math.ceil(Math.random() * 2);
					}
				// PLAYER MOVE FUNCTION//
				function playerMove(index) {
					  if (self.board[index].circle === null) {

									  if (self.currentPlayer === 1) {
											self.board[index].circle = "X";
											self.spaces--;
											self.getWinner();
											self.switchTurn();


									} else if (self.currentPlayer === 2) {
											self.board[index].circle = "O";
											self.spaces--;
											self.getWinner();
											self.switchTurn();
									}
						}
				}
				// SWITCHES TURNS FOR PLAYERS //
				function switchTurn(){
						if (self.currentPlayer === 1) {
								self.currentPlayer = 2;

						}
						else if (self.currentPlayer === 2){
								self.currentPlayer = 1;
						}
				}
				// GAME LOGIC- DETERMINES GAME WINNER AND TIE //
					function getWinner() {

						if (

						self.board[0].circle == 'X' && self.board[1].circle == 'X' && self.board[2].circle == 'X' ||
				    self.board[3].circle == 'X' && self.board[4].circle == 'X' && self.board[5].circle == 'X' ||
				    self.board[6].circle == 'X' && self.board[7].circle == 'X' && self.board[8].circle == 'X' ||
				    self.board[0].circle == 'X' && self.board[4].circle == 'X' && self.board[8].circle == 'X' ||
				    self.board[2].circle == 'X' && self.board[4].circle == 'X' && self.board[6].circle == 'X' ||
			      self.board[0].circle == 'X' && self.board[3].circle == 'X' && self.board[6].circle == 'X' ||
			   		self.board[1].circle == 'X' && self.board[4].circle == 'X' && self.board[7].circle == 'X' ||
			      self.board[2].circle == 'X' && self.board[5].circle == 'X' && self.board[8].circle == 'X'

					 ){

						self.Winner = "1 Wins";
						console.log(self.Winner);

					} else if (

				 	 self.board[0].circle == 'O' && self.board[1].circle == 'O' && self.board[2].circle == 'O' ||
			     self.board[3].circle == 'O' && self.board[4].circle == 'O' && self.board[5].circle == 'O' ||
			     self.board[6].circle == 'O' && self.board[7].circle == 'O' && self.board[8].circle == 'O' ||
			     self.board[0].circle == 'O' && self.board[4].circle == 'O' && self.board[8].circle == 'O' ||
			     self.board[2].circle == 'O' && self.board[4].circle == 'O' && self.board[6].circle == 'O' ||
			     self.board[0].circle == 'O' && self.board[3].circle == 'O' && self.board[6].circle == 'O' ||
			     self.board[1].circle == 'O' && self.board[4].circle == 'O' && self.board[7].circle == 'O' ||
			     self.board[2].circle == 'O' && self.board[5].circle == 'O' && self.board[8].circle == 'O'

					) {
					self.Winner = "2 Wins";
					console.log(self.Winner);

				}
				else if (self.spaces === 0)
					{self.Winner= "Tie";
					console.log(self.Winner);

				}
			}
		}

})();






