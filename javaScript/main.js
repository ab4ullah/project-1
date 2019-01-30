var cell = ["one", "Two", "Three", "four", "five", "six", "seven", "eight", "nine"];


// variables
let currentPlayer = "X";
var ScoreX = 0;
var ScoreO = 0;
var ScoreTie = 0;
var numOfplay = 0;


// main event
$('td').on('click', playWithComputer)

function ChekeTheWinner() {
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
    if (one === "X" && two === "X" && Three === "X") {
        alert("X is win")
        //msgX();
        scroreX();
        restartTheGame();

    }

    else if (four === "X" && five === "X" && six === "X") {
        alert("X is win")
        //msgX();
        restartTheGame();
        scroreX();
    }


    else if (seven === "X" && eight === "X" && nine === "X") {
        alert("X is win")
        // msgX();
        restartTheGame();
        scroreX();
    }


    else if (one === "X" && four === "X" && seven === "X") {
        alert("X is win")
        //msgX();
        restartTheGame();
        scroreX();
    }

    else if (two === "X" && five === "X" && eight === "X") {
        alert("X is win")
        // msgX();
        restartTheGame();
        scroreX();
    }

    else if (Three === "X" && six === "X" && nine === "X") {
        alert("X is win")
        //msgX();
        restartTheGame();
        scroreX();
    }

    else if (Three === "X" && five === "X" && seven === "X") {
        alert("X is win")
        //msgX();
        restartTheGame();
        scroreX();
    }

    else if (nine === "X" && five === "X" && one === "X") {
        alert("X is win")
        //msgX();
        restartTheGame();
        scroreX();
    }

    // if for O
    else if (one === "O" && two === "O" && Three === "O") {
        alert("O is win")
        scroreO();
        restartTheGame();
    }


    else if (four === "O" && five === "O" && six === "O") {
        alert("O is win")
        scroreO();
        restartTheGame();
    }


    else if (seven === "O" && eight === "O" && nine === "O") {
        alert("O is win")
        scroreO();
        restartTheGame();
    }


    else if (one === "O" && four === "O" && seven === "O") {
        alert("O is win")
        scroreO();
        restartTheGame();
    }

    else if (two === "O" && five === "O" && eight === "O") {
        alert("O is win")
        scroreO();
        restartTheGame();
    }

    else if (Three === "O" && six === "O" && nine === "O") {
        alert("O is win")
        scroreO();
        restartTheGame();
    }

    else if (Three === "O" && five === "O" && seven === "O") {
        alert("O is win")
        scroreO();
        restartTheGame();
    }

    else if (nine === "O" && five === "O" && one === "O") {
        alert("O is win")
        scroreO();
        restartTheGame();
    }

    // if there is no winner and number of cell 9 
    else if(numOfplay >= 9){
        scroreTie();
        alert("Tie - no one win");
        restartTheGame();} {
       
    }


}


function restartTheGame() {
    currentPlayer = "X";
    $('td').empty();
    $('td').css("background-color", "");
    numOfplay = 0;
}

function scroreX() {
    ScoreX += 1;
    $('#scoreX').text("Player One (X) Score : " + ScoreX);
}


function scroreO() {
    ScoreO += 1;
    $('#scoreO').text("Player Two (O) Score : " + ScoreO);
}


function scroreTie() {
    ScoreTie += 1;
    $('#scoreTie').text("Tie  : " + ScoreTie);
}


// function msgX(){
//    $('#test').text(" X is Win");
//    $('#test2').text(" X is Win");
//    $('img').css("display","block");
// }

function playWithComputer(event) {
    numOfplay += 2;
    $(CurrentCell).text(currentPlayer);
    var CurrentCell = event.target;
    // increase the number for every choice

    console.log(numOfplay);
    // Check the position if empty ( not include x or o )
    if ($(CurrentCell).text() !== 'X' && $(CurrentCell).text() !== 'O') {
        // print the x or o one the cell

        $(CurrentCell).text(currentPlayer);
        if ($(CurrentCell).text() === 'X') {
            $(CurrentCell).css("background-color", "rgb(114,142,255)");
        }
        if ($(CurrentCell).text() === 'X') {
            // numOfplay += 1;
            // create an array to store the empty positions on the board
            var emptySpaces = []
            // loop through the board
            for (let j = 0; j < cell.length; j++) {
                // if the position is empty, add it to our array
                if ($("#" + cell[j]).text() !== 'X' && $("#" + cell[j]).text() !== 'O') {
                    emptySpaces.push(j)
                }
            }
            // pick a random position from our emptySpaces array
            var randCell = emptySpaces[Math.floor(Math.random() * emptySpaces.length)];
            // add O to the randCell on the board
            $("#" + cell[randCell]).text("O");
            $("#" + cell[randCell]).css("background-color", "rgb(159,142,255)");


        }


        else {
            $(CurrentCell).css("background-color", "rgb(159,142,255)");
        }
        // call the the winner function
        ChekeTheWinner();
    }

    // if the cell has value print invalid
    else if (currentPlayer === 'X' || currentPlayer === 'O') {
        alert("Invalid field")
    }

}