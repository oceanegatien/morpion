$(document).ready(function(){

/*	var array = [	[1, 1, 1],
					[1, 1, 1],
					[1, 1, 1],	];

	var count = 0;
	var bool = true;
	var player;

	// fonction pour faire apparaitre un message de victoire

	var Winner = function(a)
	{
		if  (!a)
		{	
			if (player === "X")
			{		
				$('#youWin').append('<div class="alert alert-success"><h1 id="inputWinner"></h1></div>');
				$('#inputWinner').html("Player 2 Win!");	
			}
			else 
			{
				$('#youWin').append('<div class="alert alert-success"><h1 id="inputWinner"></h1></div>');
				$('#inputWinner').html("Player 1 Win!");	
			}		
		}
	};

	//fonction pour faire jouer 2 joueurs

	$('td').on('click', function()
	{
		var check = $(this).html();

		if  (check === "" && bool)
		{
			count++;
			count % 2 === 0 ? player = 'X' : player = 'O';	// condition ternaire 
			console.log(player);
		}
	});

	$('td').on('click', function()
	{
		var row = $(this).parent().attr('value');
		var cell = $(this).attr('value');

		if  (array[row][cell] === 1)   // 1 est la représentation d'une cellule vide
		{
			array[row][cell] = player;

			if  (player === 'X')
			{
				$(this).html('&#128502;');
			}
			else 
			{
				$(this).html('&#11093;');
			}
			
		}
	});

	// fonction pour observer les victoires en ligne

	$('td').on('click', function()
	{		
		var stringRow = "";
		for  (var i = 0; i <= 2; i++)
		{
			for  (var j = 0; j <= 2; j++)
			{
				stringRow += array[i][j];

				if  (stringRow.includes('XXX'))
				{
					console.log('Player 2 win!');
					bool = false;
				}
				else if  (stringRow.includes('OOO'))
				{
					console.log('Player 1 win!');
					bool = false;
				}
			}
		}
		Winner(bool);    // appel de la fonction Winner
	});
*/
	

var morpionTable =[ 1, 1, 1,
					1, 1, 1,
					1, 1, 1 ];
var p1 = true;



//fonction au click droit ou gauche.
	$('td').click(function() {
		var cell = $(this).attr('value');

		$(this).html('&#128502;');
		p1 = false;
		morpionTable.splice(cell, 1, 'X');
		victoire();
console.log(morpionTable);
		
		
	}).contextmenu(function () {
		var cell = $(this).attr('value');
		$(this).html('&#11093;');
		p1 = true;
		morpionTable.splice(cell, 1, 'O');
		victoire();
console.log(morpionTable);
	});
	
function victoire() {

	if(morpionTable[0] == 'O' && morpionTable[1]=='O' && morpionTable[2] == 'O' || morpionTable[0]=='X' && morpionTable[1]=='X' && morpionTable[2] == 'X'){
		if (p1 == true){
			 return $('#youWin').html('Joueur "&#11093;" Gagne');
		}else {
			 return $('#youWin').html('Joueur "&#128502;" Gagne');
		}
	
	}
	if (morpionTable[3]== 'O' && morpionTable[4]=='O' && morpionTable[5] == 'O' || morpionTable[3]=='X' && morpionTable[4]=='X' && morpionTable[5] == 'X'){
		if (p1 == true){
			return $('#youWin').html('Joueur "&#11093;" Gagne');
		}else {
			return $('#youWin').html('Joueur "&#128502;" Gagne');
		}
	
	}
	if (morpionTable[6]=='O' && morpionTable[7]=='O' && morpionTable[8] == 'O' || morpionTable[6]=='X' && morpionTable[7]=='X' && morpionTable[8] == 'X'){
		if (p1 == true){
			return $('#youWin').html('Joueur "&#11093;" Gagne');
		}else {
			return $('#youWin').html('Joueur "&#128502;" Gagne');
		}
	
	}
	if (morpionTable[0]=='O' && morpionTable[3] == 'O' && morpionTable[6] == 'O' || morpionTable[0]=='X' && morpionTable[3]=='X' && morpionTable[6] == 'X'){
		if (p1 == true){
			return $('#youWin').html('Joueur "&#11093;" Gagne');
		}else {
			return $('#youWin').html('Joueur "&#128502;" Gagne');
		}
	
	}
	if (morpionTable[1] =='O' && morpionTable[4]=='O' && morpionTable[7] == 'O' || morpionTable[1]=='X' && morpionTable[4]=='X' && morpionTable[7] == 'X'){
		if (p1 == true){
			return $('#youWin').html('Joueur "&#11093;" Gagne');
		}else {
			return $('#youWin').html('Joueur "&#128502;" Gagne');
		}
	
	}
	if (morpionTable[2]=='O' && morpionTable[5]=='O' && morpionTable[8] == 'O' || morpionTable[2]=='X' && morpionTable[5]=='X' && morpionTable[8] == 'X'){
		if (p1 == true){
			return $('#youWin').html('Joueur "&#11093;" Gagne');
		}else {
			return $('#youWin').html('Joueur "&#128502;" Gagne');
		}

	}
	if (morpionTable[0]=='O' && morpionTable[4]=='O' && morpionTable[8] == 'O' || morpionTable[0]=='X' && morpionTable[4]=='X' && morpionTable[8] == 'X'){
		if (p1 == true){
			return $('#youWin').html('Joueur "&#11093;" Gagne');
		}else {
			return $('#youWin').html('Joueur "&#128502;" Gagne');
		}
	}
	if (morpionTable[2]=='O' && morpionTable[4]=='O' && morpionTable[6] == 'O' || morpionTable[2]=='X' && morpionTable[4]=='X' && morpionTable[6] == 'X'){
		if (p1 == true){
			return $('#youWin').html('Joueur "&#11093;" Gagne');
		}else {
			return $('#youWin').html('Joueur "&#128502;" Gagne');
		}
	}






	

	 
}
	





});





















