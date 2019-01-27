//var userInput = ["X","O","X","O","X","O","X","O","X"];


//var cells = $('td'); 
//for (var i = 0; i < cells.length; i++) { 
  // cells[i].onclick = $('td').text("Hello");
//}


let currentPlayer = "X";


$('td').on('click', Play)  

function Play(event){
    var CurrentCell = event.target;
    
  if($(CurrentCell).text() !== 'X' && $(CurrentCell).text() !== 'O' ){
      
      $(CurrentCell).text(currentPlayer);

      console.log($(CurrentCell).text());
      ChekeTheWinner();

      ChangeThePlayer ();

  }

  else if (currentPlayer === 'X' || currentPlayer === 'O' )
  {
    alert("Invalid field")
  }
   
  //ChekeTheWinner()

  

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
    }


    if(four==="X" && five==="X" && six==="X" ){
        alert("X is win")
    }
    

    if(seven==="X" && eight==="X" && nine==="X" ){
        alert("X is win")
    }


    if(one==="X" && four==="X" && seven==="X" ){
        alert("X is win")
    }

    if(two==="X" && five==="X" && eight==="X" ){
        alert("X is win")
    }

    if(Three==="X" && six==="X" && nine==="X" ){
        alert("X is win")
    }

    if(Three==="X" && five==="X" && seven==="X" ){
        alert("X is win")
    }

    if(nine==="X" && five==="X" && one==="X" ){
        alert("X is win")
    }
    
    // if for O
    if(one==="O" && two==="O" && Three==="O" ){
        alert("O is win")
    }


    if(four==="O" && five==="O" && six==="O" ){
        alert("O is win")
    }
    

    if(seven==="O" && eight==="O" && nine==="O" ){
        alert("O is win")
    }


    if(one==="O" && four==="O" && seven==="O" ){
        alert("O is win")
    }

    if(two==="O" && five==="O" && eight==="O" ){
        alert("O is win")
    }

    if(Three==="O" && six==="O" && nine==="O" ){
        alert("O is win")
    }

    if(Three==="O" && five==="O" && seven==="O" ){
        alert("O is win")
    }

    if(nine==="O" && five==="O" && one==="O" ){
        alert("O is win")
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







