// Array for table cells
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
        Xwin();
    }

    else if (four === "X" && five === "X" && six === "X") {
        Xwin();
    }

    else if (seven === "X" && eight === "X" && nine === "X") {
        Xwin();
    }

    else if (one === "X" && four === "X" && seven === "X") {
        Xwin();
    }

    else if (two === "X" && five === "X" && eight === "X") {
        Xwin();
    }

    else if (Three === "X" && six === "X" && nine === "X") {
        Xwin();
    }

    else if (Three === "X" && five === "X" && seven === "X") {
        Xwin();
    }

    else if (nine === "X" && five === "X" && one === "X") {
        Xwin();
    }

    // if for O
    else if (one === "O" && two === "O" && Three === "O") {
        Owin();
    }

    else if (four === "O" && five === "O" && six === "O") {
        Owin();
    }

    else if (seven === "O" && eight === "O" && nine === "O") {
        Owin();
    }

    else if (one === "O" && four === "O" && seven === "O") {
        Owin();
    }

    else if (two === "O" && five === "O" && eight === "O") {
        Owin();
    }

    else if (Three === "O" && six === "O" && nine === "O") {
        Owin();
    }

    else if (Three === "O" && five === "O" && seven === "O") {
        Owin();
    }

    else if (nine === "O" && five === "O" && one === "O") {
        Owin();
    }

    // if there is no winner and number of cell 9 
    else if (numOfplay >= 9) {
        TieMassge();
    }
}

// restart The Game function to restart the game
function restartTheGame() {
    currentPlayer = "X";
    $('td').empty();
    $('td').css("background-color", "");
    numOfplay = 0;
}

// scroreX function to display who many time X wins 
function scroreX() {
    ScoreX += 1;
    $('#scoreX').text("Player One (X) Score : " + ScoreX);
}

// scroreO function to display who many time O wins 
function scroreO() {
    ScoreO += 1;
    $('#scoreO').text("Player Two (O) Score : " + ScoreO);
}

// scroreTie function to display who many time Tie
function scroreTie() {
    ScoreTie += 1;
    $('#scoreTie').text("Tie  : " + ScoreTie);
}

// main function
function playWithComputer(event) {
    // increase the number for every choice 2 buz one for player and one for the computer
    numOfplay += 2;
    $(CurrentCell).text(currentPlayer);
    var CurrentCell = event.target;
    // print to test
    console.log(numOfplay);
    // Check the position if empty ( not include x or o )
    if ($(CurrentCell).text() !== 'X' && $(CurrentCell).text() !== 'O') {
        // print the x or o one the cell
        $(CurrentCell).text(currentPlayer);
        if ($(CurrentCell).text() === 'X') {
            $(CurrentCell).css("background-color", "rgb(114,142,255)");
        }
        if ($(CurrentCell).text() === 'X') {
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
        InvalidCell();
    }

}

// function if the x win
function Xwin() {
    Swal.fire({
        position: 'center',
        type: 'success',
        title: 'X is win',
        showConfirmButton: false,
        timer: 1500
    });

    restartTheGame();
    scroreX();
}

// function if the O win
function Owin() {
    Swal.fire({
        position: 'center',
        type: 'success',
        title: 'O is win',
        showConfirmButton: false,
        timer: 1500
    });

    scroreO();
    restartTheGame();
}

// function if the no one win
function TieMassge() {
    Swal.fire({
        position: 'center',
        type: 'info',
        title: 'Tie',
        showConfirmButton: false,
        timer: 1500
    });
    restartTheGame();
    scroreTie();
}

// function if the cell not empty
function InvalidCell() {
    Swal.fire({
        position: 'center',
        type: 'error',
        title: 'Invalid Cell',
        showConfirmButton: false,
        timer: 1500
    });
}

$('img').on('click', instructions);

function instructions() {
    Swal.fire({
        title: 'Instructions',
        text: 'The object of Tic Tac Toe is to get three in a row. You play on a three by three game board. The first player is known as X and the second is O. Players alternate placing Xs and Os on the game board until either oppent has three in a row or all nine squares are filled. X always goes first, and in the event that no one has three in a row, Tie',
    });
}
