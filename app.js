// Set landing page - Done
// build the 15x15 grid (can potentially set 16 x 16 to include the starting points) - Done

let playerRoll = 0 // globally defined playerRoll
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
}

const createBlue = () => {
    const blueZone = ["#B1", "#B2", "#C1", "#C2"]
    for (let i = 0; i < blueZone.length; i++) {
        const $bluePiece = $("<button>").addClass("blue piece").attr("id", `P${i + 1}`)
        const $blueImg = $("<img src = https://i.imgur.com/44qVxWe.png>").addClass("blueImage")
        $bluePiece.append($blueImg)
        $(blueZone[i]).append($bluePiece)
    }
}

const createRed = () => {
    const redZone = ["#B12", "#B13", "#C12", "#C13"]
    for (let i = 0; i < redZone.length; i++) {
        const $redPiece = $("<button>").addClass("red piece").attr("id", `P${i + 1}`)
        const $redImg = $("<img src = https://i.imgur.com/vmIFKvG.png>").addClass("redImage")
        $redPiece.append($redImg)
        $(redZone[i]).append($redPiece)
    }
}

const createGreen = () => {
    const greenZone = ["#M12", "#M13", "#N12", "#N13"]
    for (let i = 0; i < greenZone.length; i++) {
        const $greenPiece = $("<button>").addClass("green piece").attr("id", `P${i + 1}`)
        const $greenImg = $("<img src = https://i.imgur.com/g534ewO.png>").addClass("greenImage")
        $greenPiece.append($greenImg)
        $(greenZone[i]).append($greenPiece)
    }
}

const createYellow = () => {
    const yellowZone = ["#M1", "#M2", "#N1", "#N2"]
    for (let i = 0; i < yellowZone.length; i++) {
        const $yellowPiece = $("<button>").addClass("yellow piece").attr("id", `P${i + 1}`)
        const $yellowImg = $("<img src = https://i.imgur.com/gg2hWnE.png>").addClass("yellowImage")
        $yellowPiece.append($yellowImg)
        $(yellowZone[i]).append($yellowPiece)
    }
}
// blank out irrelevant squares
// set the starting blocks for the aeroplanes - Done in CSS
// set the squares to 4 colours each - Done in CSS
// set the darker colours for the shortcuts
// build the inner lanes to win

// Set default path of piece (grid aquares) assuming we starting with a blue piece

const outerPath = ["E0", "E1", "E2", "E3", "E4", "D4", "C4", "B4", "B5", "B6", "B7", "B8", "B9", "B10", "C10", "D10", "E10", "E11", "E12", "E13", "E14", "F14", "G14", "H14", "I14", "J14", "K14", "K13", "K12", "K11", "K10", "L10", "M10", "N10", "N9", "N8", "N7", "N6", "N5", "N4", "M4", "L4", "K4", "K3", "K2", "K1", "K0", "J0", "I0", "H0", "G0", "F0"]

const blueInnerPath = ["H0", "H1", "H2", "H3", "H4", "H5", "H6"]
const redInnerPath = ["B7", "C7", "D7", "E7", "F7", "G7", "H7"]
const greenInnerPath = ["H14", "H13", "H12", "H11", "H10", "H9", "H8"]
const yellowInnerPath = ["N7", "M7", "L7", "K7", "J7", "I7", "H7"]


// build dice throw (single die)
const rollDice = () => {

    numbers = [1, 2, 3, 4, 5, 6]
    let result = numbers[Math.floor(Math.random() * numbers.length)]
    window.alert(result)
    return result
}
// set click movement to move
// input rules

// Check if the pieces are still in the houses
const startingPoint = (arr, selectedPiece) => {
    // console.log(selectedPiece)
    if (arr.includes(selectedPiece.attr("id"))) {
        // console.log(selectedPiece.attr("id"))
        if (playerRoll == 6) {
            if (selectedPiece.children().attr("class").split(' ')[0] == "blue") {
                $("#D0").append(selectedPiece.children())
            } else if (selectedPiece.children().attr("class").split(' ')[0] == "green") {
                $("#L14").append(selectedPiece.children())
            } else if (selectedPiece.children().attr("class").split(' ')[0] == "red") {
                $("#B11").append(selectedPiece.children())
            } else if (selectedPiece.children().attr("class").split(' ')[0] == "yellow") {
                $("#N3").append(selectedPiece.children())
            }
        }
        playerRoll = 0 // resets playerRoll
    }
}
// Moving from starting point into the outer path array
const moveOut = (arr, selectedPiece) => {
    if (selectedPiece.attr("id") == "D0") {
        let arrayEndpt = arr[playerRoll - 1]
        console.log(arrayEndpt)
        const $endPoint = $(`#${arrayEndpt}`)
        $endPoint.append(selectedPiece.children())
    } else if (selectedPiece.attr("id") == "L14") {
        let arrayEndpt = arr[25 + playerRoll]
        console.log(arrayEndpt)
        const $endPoint = $(`#${arrayEndpt}`)
        $endPoint.append(selectedPiece.children())
    } else if (selectedPiece.attr("id") == "B11") {
        let arrayEndpt = arr[12 + playerRoll]
        console.log(arrayEndpt)
        const $endPoint = $(`#${arrayEndpt}`)
        $endPoint.append(selectedPiece.children())
    } else if (selectedPiece.attr("id") == "N3") {
        let arrayEndpt = arr[38 + playerRoll]
        console.log(arrayEndpt)
        const $endPoint = $(`#${arrayEndpt}`)
        $endPoint.append(selectedPiece.children())
    }
    playerRoll = 0
}



$(() => {
    // build landing page and only start game upon pressing button and entering number of players
    const $startButton = $("<button>").text("Start")
    $(".container").append($startButton)
    $startButton.on("click", (event) => {
        event.preventDefault()
        const $inputNumber = $("#player-number").val()
        let x = $inputNumber
        $(".container").empty()
        makeBoard()
        $("#D0").text("SP")
        $("#B11").text("SP")
        $("#L14").text("SP")
        $("#N3").text("SP")

        if (x == 4) {
            createBlue()
            createRed()
            createGreen()
            createYellow()
        } else if (x == 2) {
            createBlue()
            createGreen()
        } else {
            createBlue()
            createRed()
            createGreen()
        }
        // Dice roll
        const $dice = $("<button>").addClass("dice").text("Dice")
        $(".container").append($dice)
        $dice.on("click", (event) => {
            event.preventDefault()
            playerRoll = rollDice()
            console.log(playerRoll) // dice will work and can record the dice rolled
        })
        const houses = ["B1", "B2", "C1", "C2", "B12", "B13", "C12", "C13", "M1", "M2", "N1", "N2", "M12", "M13", "N12", "N13"]
        const $piece = $(".box") // what if i put it as the grid instead?
        $piece.on("click", (event) => {
            event.preventDefault()
            // check if they are still in houses
            startingPoint(houses, $(event.currentTarget))
        })
        // how to just apply the function to the selected piece?
        const $movingPiece = $(".box")
        $movingPiece.on("click", (event) => {
            event.preventDefault()
            moveOut(outerPath, $(event.currentTarget))
        })

        // Rules of the game

    })





})

// Appendix (unused code)
// Creating pieces
// const pieceColours = ["blue", "red", "green", "yellow"]
        // const gamePieces = []
        // for (let i = 0; i < pieceColours.length; i++) {
        //     for (let j = 0; j < 4; j ++){}
        //     let n = 0
        //     while (n < 4) { // error throws that n is not defined - but why?
        //         const $gamePiece = $("<button>").addClass(pieceColours[i])
        //         if (pieceColours == "blue") {
        //             $gamePiece.append("img src = https://ik.imagekit.io/theartling/prod/tr:w-700,h-700/products/Product/ccf129b7800242888b810ca3afb1a384.jpg")
        //             gamePieces.push($gamePiece)
        //         }
        //         n++
        //     }
        // }

        // console.log(gamePieces)

        // const $bluePiece = $("<button>").addClass("blue").attr("id", 'P1')
        // const $blueImg = $("<img src = https://i.imgur.com/44qVxWe.png>").addClass("blueImage")
        // $bluePiece.append($blueImg)
        // $("#B1").append($bluePiece)
        // $("#B2").append(($bluePiece).attr("id", "P2"))
        // $("#C1").append($bluePiece)
        // $("#C2").append($bluePiece)

        // build the 4 pieces for each colour (total 16 pieces) using Class?

// class GamePiece {
//     constructor(color) {
//         this.color = color
//     }

//     move() {

//     }
// }

    // const $row = $(".row")
    // const $box = $(".box")
    // let turn = 1
    // const registeredPlays = []
    // $box.on("click", (event) => {
    //     console.log($(event.currentTarget))
    //     const $selectedBox = $(event.currentTarget)
    // })