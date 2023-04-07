// Set landing page

// Set player names

// build the 15x15 grid (can potentially set 16 x16 to include the starting points)
const makeBoard = () => {
    letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"]
    for (let i = 0; i < 15; i++) {
        const $row = $("<div>")
        $row.addClass("row");
        for (let j = 0; j < 15; j++) {
            const $box = $("<div>")
            $box.addClass("box")
            $box.attr("id", String(letters[i]) + String(j))
            $row.append($box)
        }
        const $container = $(".container")
        $container.append($row)
    }
    const $row = $(".row")
    const $box = $(".box")
    let turn = 1
    const registeredPlays = []
    $box.on("click", (event) => {
        console.log($(event.currentTarget))
        const $selectedBox = $(event.currentTarget)
    })
}
// blank out irrelevant squares

// set the starting blocks for the aeroplanes - Done in CSS
// set the squares to 4 colours each - Done in CSS
// set the darker colours for the shortcuts
// build the inner lanes to win

// build the 4 pieces for each colour (total 16 pieces) using Class?

class GamePiece {
    constructor(color) {
        this.color = color
    }

    move() {

    }
}

// Set default path of piece (grid aquares) assuming we starting with a blue piece

const outerPath = ["E0", "E1", "E2", "E3", "E4", "D4", "C4", "B4", "B5", "B6", "B7", "B8", "B9", "B10", "C10", "D10", "E10", "E11", "E12", "E13", "E14", "F14", "G14", "H14", "I14", "J14", "K14", "K13", "K12", "K11", "K10", "L10", "M10", "N10", "O10", "O9", "O8", "O7", "O6", "O5", "O4", "N4", "M4", "L4", "K4", "K3", "K2", "K1", "K0", "J0", "I0", "H0", "G0", "F0"]


// build dice throw (single die)
const rollDice = () => {

    numbers = [1, 2, 3, 4, 5, 6]
    let result = numbers[Math.floor(Math.random() * numbers.length)]
    window.alert(result)
    playerRoll = result
}
// set click movement to move

// input rules

$(() => {

    // build landing page and only start game upon pressing button and entering number of players


    makeBoard()
    $("#D0").text("SP")
    $("#B11").text("SP")
    $("#L14").text("SP")
    $("#N3").text("SP")

    const pieceColours = ["blue", "red", "green", "yellow"]
    const gamePieces = []
    for (let i = 0; i < pieceColours.length; i++) {
        while (n < 4) { // error throws that n is not defined - but why?
            const $gamePiece = $("<button>").addClass(pieceColours[i])
            if (pieceColours == "blue") {
                $gamePiece.append("img src = https://ik.imagekit.io/theartling/prod/tr:w-700,h-700/products/Product/ccf129b7800242888b810ca3afb1a384.jpg")
                gamePieces.push($gamePiece)
            }
            n++
        }
    }

    console.log(gamePieces)

    // this portion works if we dont have the gamepieces code above
    const $dice = $("<button>").addClass("dice").text("Dice")
    $(".container").append($dice)
    let playerRoll = 0
    $dice.on("click", (event) => {
        event.preventDefault()
        rollDice()
    })



})