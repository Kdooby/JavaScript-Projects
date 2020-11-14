// keeps track of who's turn it is
let activePlayer = 'X';
// This array stores an array of moves.  Use this to determine win conditions
let selectedSquares = [];

//Function for placing an x or o in a square
function placeXorO(squareNumber) {
    //Condition ensures a square hasn't been selected already.
    //The .some() method is used to check each element of selectedSquare array to 
    //see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //Variable recieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        //This condition check who's turn it is.
        if (activePlayer === 'X') {
            //if activePlayer is equal to 'X', the x.png is placed in HTML.
            select.style.backgroundImage = 'url("images/x_2.png")';
            select.style.backgroundSize = "200px 200px";
        //Active plyaer may only be 'X' or 'O' so, if not 'X' it must be 'O'
        } else {
            //if activePlayer is equal to 'O', the o.png is placed in HTML.
            select.style.backgroundImage = 'url("images/o_2.png")';
            select.style.backgroundSize = "200px 200px";
        }
        //squareNumber and activePlyaer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //Calls a function to check for any win condition.
        checkWinConditions();
        //Condition is for changing the active player
        if (activePlayer === 'X') {
            //if active plyaer is 'X' change it to 'O'
            activePlayer = 'O';
        } else {
            //Change the activePlayer to 'X'
            activePlayer = 'X';
        }

        //Function plays placement sound
        audio('./media/new_place.mp3');
        //Condition checks to see if it is computers turn.
        if(activePlayer === 'O') {
            //Function disables clicking for computer choice
            disableClick();
            //Function waits 1 second before placeing the image and enabling click
            setTimeout(function (){computersTurn();}, 1000);
        }
        //Returning True is needed for our computerTurn() funciton to work
        return true;
    }

    //Function results in random square being selected
    function computersTurn() {
        //Boolean is needed for While Loop
        let success = false;
        //Variable stores a random number 0-8
        let pickASquare;
        //Condition allows our while loop to keep trying if a square
        //is selected already
        while (!success) {
            //A random number between 0 and 8 is selected 
            pickASquare = String(Math.floor(Math.random() * 9));
            //If the random number evaluates returns true, the square hasn't been
            //selected yet.
            if (placeXorO(pickASquare)) {
                //Calls the function
                placeXorO(pickASquare);
                //Changes our boolean and ends the loop
                success = true;
            };
        }
    }
}

//Function parses the selectedSquares array to search for win conditions.
//drawWinLine function is called to draw line if coinditon is met.
function checkWinConditions() {
    // X 0, 1, 2 condition
    if  (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100); }
    // X 3, 4, 5 condition
    else if  (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304); }
    // X 6, 7, 8 condition
    else if  (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508); }
    // X 0, 3, 6 condition
    else if  (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558); }
    // X 1, 4, 7 condition 
    else if  (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558); }
    // X 2, 5, 8 condition
    else if  (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558); }
    // X 6, 4, 2 condition
    else if  (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90); }
    // X 0, 4, 8 condition
    else if  (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520); }
    // O 0, 1, 2 condition
    else if  (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100); }
    // O 3, 4, 5 condition
    else if  (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304); }
    // O 6, 7, 8 condition
    else if  (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508); }
    // O 0, 3, 6 condition
    else if  (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558); }
    // O 1, 4, 7 condition 
    else if  (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558); }
    // O 2, 5, 8 condition
    else if  (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558); }
    // O 6, 4, 2 condition
    else if  (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90); }
    // O 0, 4, 8 condition
    else if  (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520); }
    // This condition checks for a tie. If none of the above conditions register
    //and 9 squares are seleced, the code is executed
    else if (selectedSquares.length >= 9) {
        //This function plays tie game sound
        audio('./media/new_tie.mp3');
        //Function sets a .3 second timer before the resetGame is called
        setTimeout(function() { resetGame(); }, 1000);
    }
    //Function checks if an array includes 3 strings.
    //It is used to check for each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        //The next 3 variables will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //If the 3 variables we pass are all included in our array true is 
        //returned and our else if condtion executes the drawWinLine function.
        if (a === true && b === true && c === true) { return true; }


    }
}

//This function makes our body element temporarily unclickable
function disableClick() {
    //This makes our body unclickable
    body.style.pointerEvents = 'none';
    //This makes our body clickable again after 1 second.
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

//This function takes a string parameter of the path you set earlier for
//placement sound ('./media/place.mp3')
function audio(audioURL) {
    //We create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    //Play method plays our audio sound
    audio.play();
}



//This function utilizes html canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    //This line gives us access to methods and properties to use on convas
    const c = canvas.getContext('2d');
    //This line indicates where the start of a lines x axis is
    let x1 = coordX1,
    //This line indicates where the start of a lines y axis is
        y1 = coordY1,
        //indicates where the end of a lines x axis is
        x2 = coordX2,
        //indicates where ethe end of a lines x axis is
        y2 = coordY2,
        //Stores temporary x axis data we update in our animation loop
        x = x1,
        //Stores temporary y axis data we update in the animation loop
        y = y1;

    //Function interacts with the canvas
    function animateLineDrawing() {
        //Variable creates the loop for when the game ends it restarts
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //Method clears content from last loop iteration.
        c.clearRect(0, 0, 608, 608);
        //Starts a new path
        c.beginPath();
        //moves us to a starting point for our line
        c.moveTo(x1, y1);
        //indicatres the end point in our line
        c.lineTo(x, y);
        //se4t the width of our line
        c.lineWidth = 5;
        //sets the color of the line
        c.strokeStyle = 'red';
        //Draws everyting we laid out about
        c.stroke();
        //Condtion checks if we've reached the endpoint
        if (x1 <= x2 && y1 <= y2) {
            //Condtion adds 10 to the previous end x piont
            if (x < x2) { x += 10; }
            //Condition adds 10 to the previous end y point
            if (y < y2) { y += 10; }
            //Condition cancels our animation loop if reach the end points
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //Condition is similar to the one abouve
        //it was necessary for the 6, 4, 2 win condition
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }    
    //Function clears our canvas after our win line is drawn
    function clear() {
        //Starts animation loop
        const animationLoop = requestAnimationFrame(clear);
        //clears the canvas
        c.clearRect(0, 0, 608, 608);
        //Stops animation loop
        cancelAnimationFrame(animationLoop);
    }
    //Disallows clicking while the win sound is playing
    disableClick();
    //plays the win sounds
    audio('./media/new_winGame.mp3');
    //Calls our main animation loop
    animateLineDrawing();
    //This line waits 1 second
    //Clears canvas, resets game, and allows clicking again
    setTimeout(function () { clear(); resetGame(); }, 1000);
}
//Resets the game in a tie or a win
function resetGame() {
    //Iterates through each HTML square element
    for (let i = 0; i < 9; i++) {
        //Varibale get the HTML element of i
        let square = document.getElementById(String(i));
        //Removes our elements backgroundImage
        square.style.backgroundImage = '';
    }
    //Resets the array so it is empty
    selectedSquares = [];
}
