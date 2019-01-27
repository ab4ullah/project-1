//var userInput = ["X","O","X","O","X","O","X","O","X"];


//var cells = $('td'); 
//for (var i = 0; i < cells.length; i++) { 
  // cells[i].onclick = $('td').text("Hello");
//}


let currentPlayer = "X";


$('td').on('click', Play)  

function Play(event){
    var CurrentCell = event.target;
    
  if(CurrentCell.textContent !== 'X' && CurrentCell.textContent !== 'O' ){
      
      $(CurrentCell).text(currentPlayer)

      // change turn
   if (currentPlayer === 'X'){
       currentPlayer = 'O'
   } else {
       currentPlayer = 'X'
   }
   
  }

  else if (currentPlayer === 'X' || currentPlayer === 'O' )
  {
    alert("Invalid field")
  }
   
    
  

}
    
    //$($this).css('background','yellow');
   
    //if(table.tr[0].td[0] === true){
        //console.log(col + "" + row);
   // }







