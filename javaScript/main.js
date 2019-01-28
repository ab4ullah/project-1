
let currentPlayer = "X";

var ScoreX = 0;
var ScoreO = 0;

var numOfplay = 0;


$('td').on('click', Play)  

function Play(event){
    var CurrentCell = event.target;
    numOfplay += 1;
  if($(CurrentCell).text() !== 'X' && $(CurrentCell).text() !== 'O' ){
      
      $(CurrentCell).text(currentPlayer);
      if($(CurrentCell).text() === 'X'){
      $(CurrentCell).css("background-color","rgb(114,142,255)");
      }
      else{
        $(CurrentCell).css("background-color","rgb(159,142,255)"); 
      }
      //console.log($(CurrentCell).text());
      
      //console.log(numOfplay);
      ChekeTheWinner();
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


    else if(four==="X" && five==="X" && six==="X" ){
        alert("X is win")
        restartTheGame();
        scroreX();
        
    }
    

   else if(seven==="X" && eight==="X" && nine==="X" ){
        alert("X is win")
        restartTheGame();
        scroreX();
    }


   else if(one==="X" && four==="X" && seven==="X" ){
        alert("X is win")
        restartTheGame();
        scroreX();
    }

   else if(two==="X" && five==="X" && eight==="X" ){
        alert("X is win")
        restartTheGame();
        scroreX();
    }

   else if(Three==="X" && six==="X" && nine==="X" ){
        alert("X is win")
        restartTheGame();
        scroreX();
    }

   else if(Three==="X" && five==="X" && seven==="X" ){
        alert("X is win")
        restartTheGame();
        scroreX();
    }

   else if(nine==="X" && five==="X" && one==="X" ){
        alert("X is win")
        restartTheGame();
        scroreX();
    }
    
    // if for O
   else if(one==="O" && two==="O" && Three==="O" ){
        alert("O is win")
        scroreO();
        restartTheGame();
    }


  else if(four==="O" && five==="O" && six==="O" ){
        alert("O is win")
        scroreO();
        restartTheGame();
    }
    

   else if(seven==="O" && eight==="O" && nine==="O" ){
        alert("O is win")
        scroreO();
        restartTheGame();
    }


   else if(one==="O" && four==="O" && seven==="O" ){
        alert("O is win")
        scroreO();
        restartTheGame();
    }

    else if(two==="O" && five==="O" && eight==="O" ){
        alert("O is win")
        scroreO();
        restartTheGame();
    }

    else if(Three==="O" && six==="O" && nine==="O" ){
        alert("O is win")
        scroreO();
        restartTheGame();
    }

   else if(Three==="O" && five==="O" && seven==="O" ){
        alert("O is win")
        scroreO();
        restartTheGame();
    }

   else if(nine==="O" && five==="O" && one==="O" ){
        alert("O is win")
        scroreO();
        restartTheGame();
    }

    else if (numOfplay === 9){
        alert("no one win");
        restartTheGame();

    } else {
        ChangeThePlayer ();
    }



    

}

  

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
    numOfplay = 0;
  }

  function scroreX(){
    ScoreX +=1; 
    
    $('#scoreX').text("Player One (X) Score : " + ScoreX);
  }


  function scroreO(){
    ScoreO +=1; 
    
    $('#scoreO').text("Player Two (O) Score : " + ScoreO);
  }
  


  
  








