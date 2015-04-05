(function (){
	angular
		.module('ttcApp',['firebase'])
		.controller('mainController', mainController);

	mainController.$inject = ['$firebaseObject'];

				//SET CONTROLLER FUNCTION & VARIABLES//
		function mainController($firebaseObject,$firebaseArray){
			var introSound = new Audio ("./audio/intro.mp3");
			var submitSound = new Audio ("./audio/ttc_01.mp3");
			var winSound = new Audio ("./audio/ending.mp3");
			var resetSound = new Audio ("./audio/Reset.mp3");
			var sounds = [
			  "./audio/ttc_01.mp3","./audio/ttc_02.mp3","./audio/ttc_03.mp3",
				"./audio/ttc_04.mp3","./audio/ttc_05.mp3","./audio/ttc_06.mp3",
				"./audio/ttc_07.mp3","./audio/ttc_08.mp3","./audio/ttc_09.mp3",
				"./audio/ttc_10.mp3","./audio/ttc_11.mp3","./audio/ttc_12.mp3",
				"./audio/ttc_13.mp3","./audio/ttc_14.mp3","./audio/ttc_15.mp3",
				"./audio/ttc_16.mp3","./audio/ttc_17.mp3","./audio/ttc_18.mp3",
				"./audio/ttc_19.mp3"
			];
			var ref= new Firebase("https://tictactoefbapp.firebaseio.com/");
			var game=$firebaseObject(ref);
			var self = this;
				this.createGame = createGame();
				self.enterName = 1;
				self.game= game;
				self.ref= ref;
				self.playerMove = playerMove;
				self.currentPlayer = 1 ;
				self.selectPlayer = selectTurn();
				self.switchTurn = switchTurn;
				self.getWinner= getWinner;
				self.newGame = newGame;
				self.Winner = 0;
				self.spaces = 9;
				self.playerOnePoints = 0;
				self.playerTwoPoints = 0;
				self.resetScore = resetScore;
				self.board = [
				{circle: null }, {circle: null }, {circle: null },
				{circle: null }, {circle: null }, {circle: null },
				{circle: null }, {circle: null }, {circle: null }
				];
				introSound.play();

		// CREATES GAME ON FIREBASE //
			function createGame() {
				self.game = $firebaseObject(ref);
				self.game.board = [
					{circle: ""},{circle: ""},{circle: ""},
					{circle: ""},{circle: ""},{circle: ""},
					{circle: ""},{circle: ""},{circle: ""}
					];
				self.playerMove = playerMove;
				self.currentPlayer = 0 ;
				self.selectPlayer = selectTurn();
				self.switchTurn = switchTurn;
				self.getWinner= getWinner;
				self.newGame = newGame;
				self.game.Winner = 0;
				self.game.spaces = 9;
				self.game.playerOnePoints = 0;
				self.game.playerTwoPoints = 0;
				self.game.$save(self.game);
			}
			// RESETS GAME BOARD AND SCORE FOR NEW GAME //
				function newGame() {
					self.currentPlayer = 0;
					self.Winner = 0;
					self.spaces = 9;
					self.board = [
					{circle: null }, {circle: null }, {circle: null },
					{circle: null }, {circle: null }, {circle: null },
					{circle: null }, {circle: null }, {circle: null }
					];
					resetSound.play();
					self.game.$save(self.game);
					}

				function resetScore(){
					self.Winner = 0;
					self.spaces= 9;
					self.playerOnePoints= 0;
					self.playerTwoPoints= 0;
					self.board = [
					{circle: null }, {circle: null }, {circle: null },
					{circle: null }, {circle: null }, {circle: null },
					{circle: null }, {circle: null }, {circle: null }
					];
					resetSound.play();

				}

				// SELECT TURN FUNCTION //
				function selectTurn(){
					self.currentPlayer = Math.ceil(Math.random() * 2);
					}

				// PLAYER MOVE FUNCTION //
				function playerMove(index) {
				  if (self.board[index].circle === null) {
	  				// RANDOM SOUNDS PLAYS DURING PLAYERMOVE //
	  				var randomSound=Math.floor(Math.random()*sounds.length);
	  				var newSounds= new Audio(sounds[randomSound]);
	  					newSounds.play();
						if (self.currentPlayer === 1) {
								self.board[index].circle = "X";
								self.spaces--;
								self.getWinner();
								self.switchTurn();
						}
						else if (self.currentPlayer === 2) {
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
					// GAME LOGIC- DETERMINES GAME WINNER AND TIE, ADDS TO SCOREBOARD //

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

						self.Winner = "1";
						self.playerOnePoints++;
						console.log(self.Winner);
						console.log(self.playerOnePoints);
						winSound.play();

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
					self.Winner = "2";
					self.playerTwoPoints++;
					console.log(self.Winner);
					console.log(self.playerTwoPoints);
					winSound.play();

				}
				else if (self.spaces === 0){
					self.Winner= "Tie";
					console.log(self.Winner);
					winSound.play();
					self.playerOnePoints = self.playerOnePoints;
					self.playerTwoPoints = self.playerTwoPoints;
				}
			}
		}
})();