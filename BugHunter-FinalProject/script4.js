// Get HTML elements
const board = document.getElementById("checkerboard");
const turnDisplay = document.getElementById("turnDisplay");
const resetButton = document.getElementById("resetButton");

// Keep track of the selected piece
let selectedPiece = null;

// Red player starts
let currentPlayer = "red";

// Create the checkerboard
function createBoard() {

    // Clear the board before creating it
    board.innerHTML = "";

    selectedPiece = null;
    currentPlayer = "red";

    turnDisplay.textContent = "Red Player's Turn";

    // Create 8 rows
    for (let row = 0; row < 8; row++) {

        // Create 8 columns
        for (let column = 0; column < 8; column++) {

            const square = document.createElement("div");

            square.classList.add("square");

            // Store the row and column
            square.dataset.row = row;
            square.dataset.column = column;

            // Create checkerboard color pattern
            if ((row + column) % 2 === 0) {
                square.classList.add("light");
            } else {
                square.classList.add("dark");

                // Add black pieces to the first 3 rows
                if (row < 3) {
                    createPiece(square, "black");
                }

                // Add red pieces to the last 3 rows
                if (row > 4) {
                    createPiece(square, "red");
                }
            }

            // Allow the player to click a square
            square.addEventListener("click", movePiece);

            board.appendChild(square);
        }
    }
}


// Creates a checker piece
function createPiece(square, color) {

    const piece = document.createElement("div");

    piece.classList.add("piece");
    piece.classList.add(color);

    piece.dataset.color = color;

    // Stop the square click from happening first
    piece.addEventListener("click", function(event) {

        event.stopPropagation();

        selectPiece(piece);
    });

    square.appendChild(piece);
}


// Select a checker piece
function selectPiece(piece) {

    // Only allow the current player to select their pieces
    if (piece.dataset.color !== currentPlayer) {
        return;
    }

    // Remove selection from old piece
    if (selectedPiece !== null) {
        selectedPiece.classList.remove("selected");
    }

    // Select new piece
    selectedPiece = piece;

    selectedPiece.classList.add("selected");
}


// Move the selected piece
function movePiece(event) {

    const targetSquare = event.currentTarget;

    // Make sure a piece has been selected
    if (selectedPiece === null) {
        return;
    }

    // Do not move onto a square that already contains a piece
    if (targetSquare.children.length > 0) {
        return;
    }

    // Pieces should only move onto dark squares
    if (!targetSquare.classList.contains("dark")) {
        return;
    }

    const currentSquare = selectedPiece.parentElement;

    const currentRow = Number(currentSquare.dataset.row);
    const currentColumn = Number(currentSquare.dataset.column);

    const targetRow = Number(targetSquare.dataset.row);
    const targetColumn = Number(targetSquare.dataset.column);

    // Find how far the player is trying to move
    const rowDifference = targetRow - currentRow;
    const columnDifference = Math.abs(targetColumn - currentColumn);

    let validMove = false;

    // Red pieces move upward
    if (
        currentPlayer === "red" &&
        rowDifference === -1 &&
        columnDifference === 1
    ) {
        validMove = true;
    }

    // Black pieces move downward
    if (
        currentPlayer === "black" &&
        rowDifference === 1 &&
        columnDifference === 1
    ) {
        validMove = true;
    }

    // Move the piece if the move is valid
    if (validMove) {

        targetSquare.appendChild(selectedPiece);

        selectedPiece.classList.remove("selected");

        selectedPiece = null;

        changeTurn();
    }
}


// Switch between red and black
function changeTurn() {

    if (currentPlayer === "red") {

        currentPlayer = "black";
        turnDisplay.textContent = "Black Player's Turn";

    } else {

        currentPlayer = "red";
        turnDisplay.textContent = "Red Player's Turn";
    }
}


// Reset the game
resetButton.addEventListener("click", createBoard);


// Start the game
createBoard();