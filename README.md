# brandontjl.github.io

Game: Aeroplane Chess
Site: https://brandontjl.github.io/
No. of players: 2 to 4

Game objective:
Each player will have a 4 pieces belonging to either of the 4 corresponding colours - Blue, Red, Green, Yellow. The objective of the game is to have each plane circle the entire board once and enter their corresponding coloured paths. In their coloured paths, the player will have to roll an exact number for each piece to enter the centre of the board. First player to assemble all 4 pieces into the centre of the board wins.

Game Creation:

A) Landing Page
- Basic HTML, CSS and Jquery linkage amongst the 3 main files - html.index / main.css / app.js
- Headers, text and images were included in the <div> to display game title "Aeroplane Chess" and basic design image
- Input field was included for users to enter the no. of players playing the game and the field was restricted to only numbers with a mininmum of 2 and maximum of 4
- Start button was included as part of the <div> where upon clicking the button, all designated elements (except game title) were to be removed (empty()) and corresponding functions were called to create game board, pieces and dice

B) Main Game
Arrays created:
- outerPath = This was the main path with all the corresponding grids where each piece will be travelling on.
- colourInnerPath = This will be the designated paths for each colour once they complete 1 round of the outerPath.
- colourHome = This will be the starting grids for each individual piece per colour.
- colourSquares = These arrays are used to help record movement in the function move().
- houses = This array was used to validate if the selected starting grid still has a child (game piece) and can push the child into the starting point (SP).

Functions called:
1. createBlue() / createRed() / createGreen() / createYellow() = These functions will create the corresponding pieces for each colour and append them to their coloured starting zones.
2. makeBoard() = This function will be called upon clicking "Start" button. It calls a nested loop to build a 15x15 board with each grid having a corresponding class of "box" and an ID (i.e., A0, A1, A2, ..., O12, O13, O14).
3. startingPoint() = This function was used to validate if the selected starting grid still has a child (game piece) and can push the child into the -starting point (SP) by checking against the houses array.
4. moveOut() = This function will be called upon clicking each corresponding home grid. It pushes the pieces at the starting point into the main path (outerPath)
5. move() = This function holds the bullk of the movement of each piece and was used to fulfil rules 2 and 3.

Rules of the game:
1. Only when the dice rolls 6, can a piece exit their starting zone and into the starting point (SP).
2. When a piece lands on a grid with their corresponding colour, they can advance 4 more grid colours and "jump" to the next grid with the same colour.
3. Only an exact roll for the number of steps required can land a piece into the centre of their board.

Supposed Rules (not completed):
1. When a piece lands on a grid that is already occupied by another piece,
If the pieces are of the same colour, they can stack upon each other and move as one. Else, if they are of different colours, then the incumbent piece will be knocked back into their starting zones. (Was unable to program this portion due to Challenge #1)

Other Stretch Goals:
a. Setting game completion status
b. Setting turn-based restrictions
c. Animating dice roll

jQuery technologies:
- DOM Manipulation (append)
- Event Handling (clicking)
- For-Loops
- Array manipulation (slice, split, push)
- If - else Boolean statements

CSS File:
- outerPath grids were coloured at 4 space intervals
- Other technologies included using display, background-color, font, font-size, height, width, padding, etc.

C) Challenges Faced:
1. When I use .children(), it returns an object with the children elements. However, how do I access each child? They are supposedly object data types and I am unable to call the class of each child element.
2. I faced challenges when trying to move each piece based on the pieces themselves as buttons. I reverted to using the static grids instead but I believe this is linked to Challenge #3 below.
3. I believe the game can be a lot more efficient if I were to use Class to build each game piece since the functions to be called are the same. However, at the present moment, still not confident in applying Class concepts to programming.
4. Weak in CSS - especially with regards to how to manipulate elements to be beside, centred, in front of, behind different elements.


