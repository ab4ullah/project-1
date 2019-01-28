//var userInput = ["X","O","X","O","X","O","X","O","X"];


//var cells = $('td'); 
//for (var i = 0; i < cells.length; i++) { 
  // cells[i].onclick = $('td').text("Hello");
//}


let currentPlayer = "X";

var ScoreX = 0;
var ScoreO = 0;


$('td').on('click', Play)  

function Play(event){
    var CurrentCell = event.target;
    
  if($(CurrentCell).text() !== 'X' && $(CurrentCell).text() !== 'O' ){
      
      $(CurrentCell).text(currentPlayer);
      if($(CurrentCell).text() === 'X'){
      $(CurrentCell).css("background-color","rgb(114,142,255)");
      }
      else{
        $(CurrentCell).css("background-color","rgb(159,142,255)"); 
      }
      //console.log($(CurrentCell).text());
      ChekeTheWinner();

      ChangeThePlayer ();

  }

  else if (currentPlayer === 'X' || currentPlayer === 'O' )
  {
    alert("Invalid field")
  }
   


  

}


function ChekeTheWinner(){
    var one = $('#one').text();
    var two = $('#Two').text();
    var Three = $('#Three').text();
    var four = $('#four').text();
    var five = $('#five').text();
    var six = $('#six').text();
    var seven = $('#seven').text();
    var eight = $('#eight').text();
    var nine = $('#nine').text();
   
    // if for X
    if(one==="X" && two==="X" && Three==="X" ){
        alert("X is win")
        restartTheGame();
        scroreX();
     
    }


    if(four==="X" && five==="X" && six==="X" ){
        alert("X is win")
        restartTheGame();
        scroreX();
        
    }
    

    if(seven==="X" && eight==="X" && nine==="X" ){
        alert("X is win")
        restartTheGame();
        scroreX();
    }


    if(one==="X" && four==="X" && seven==="X" ){
        alert("X is win")
        restartTheGame();
        scroreX();
    }

    if(two==="X" && five==="X" && eight==="X" ){
        alert("X is win")
        restartTheGame();
        scroreX();
    }

    if(Three==="X" && six==="X" && nine==="X" ){
        alert("X is win")
        restartTheGame();
        scroreX();
    }

    if(Three==="X" && five==="X" && seven==="X" ){
        alert("X is win")
        restartTheGame();
        scroreX();
    }

    if(nine==="X" && five==="X" && one==="X" ){
        alert("X is win")
        restartTheGame();
        scroreX();
    }
    
    // if for O
    if(one==="O" && two==="O" && Three==="O" ){
        alert("O is win")
        restartTheGame();
        scroreO();
    }


    if(four==="O" && five==="O" && six==="O" ){
        alert("O is win")
        restartTheGame();
        scroreO();
    }
    

    if(seven==="O" && eight==="O" && nine==="O" ){
        alert("O is win")
        restartTheGame();
        scroreO();
    }


    if(one==="O" && four==="O" && seven==="O" ){
        alert("O is win")
        restartTheGame();
        scroreO();
    }

    if(two==="O" && five==="O" && eight==="O" ){
        alert("O is win")
        restartTheGame();
        scroreO();
    }

    if(Three==="O" && six==="O" && nine==="O" ){
        alert("O is win")
        restartTheGame();
        scroreO();
    }

    if(Three==="O" && five==="O" && seven==="O" ){
        alert("O is win")
        restartTheGame();
        scroreO();
    }

    if(nine==="O" && five==="O" && one==="O" ){
        alert("O is win")
        restartTheGame();
        scroreO();
    }

    }

    
    //$($this).css('background','yellow');
   
    //if(table.tr[0].td[0] === true){
        //console.log(col + "" + row);
   // }

   function ChangeThePlayer (){
     // change turn
     if (currentPlayer === 'X'){
        currentPlayer = 'O'
        
    } else {
        currentPlayer = 'X'
    }
   }

   function restartTheGame() {
    currentPlayer = "X";
    $('td').empty();
    $('td').css("background-color", "");
  }

  function scroreX(){
    ScoreX +=1; 
    // console.log(ScoreX);
    $('#scoreX').text("Player One (X) Score : " + ScoreX);
  }


  function scroreO(){
    ScoreO +=1; 
    // console.log(ScoreX);
    $('#scoreO').text("Player One (O) Score : " + ScoreO);
  }
  








