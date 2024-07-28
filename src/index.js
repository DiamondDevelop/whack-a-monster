/**A special note to the reader. Thanks you for being here...
This code follows a strict story adherence.
It can be located in the original Github.com repo read me
Let my code be clean and let it be reusable, enjoy!
*/


// TODO: Add the missing query selectors:
// US01:4 Basic game structure
//additional query's were made to retrieve the score and timer elements
// these query selectors target 
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const startButton = document.querySelector('#start');
// Added the missing query selectors:
const score = document.querySelector("#score"); // Use querySelector() to get the score element
const timerDisplay = document.querySelector("#timer"); // use querySelector() to get the timer element.

let time = 0;
let timer;
let lastHole = 0;
let points = 0;
let difficulty ="hard"



/**
 * Generates a random integer within a range.
 *
 * The function takes two values as parameters that limits the range 
 * of the number to be generated. For example, calling randomInteger(0,10)
 * will return a random integer between 0 and 10. Calling randomInteger(10,200)
 * will return a random integer between 10 and 200.
 *
 */
/**US2:01 Basic game functionality: Randomness
 * The moles (or other chosen entity) 
 * need to appear and disappear randomly.
 * this will be a global function to define
 * a random number
 */
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Sets the time delay given a difficulty parameter.
 *
 * The function takes a `difficulty` parameter that can have three values: `easy`
 * `normal` or `hard`. If difficulty is "easy" then the function returns a time delay
 * of 1500 milliseconds (or 1.5 seconds). If the difficulty is set to "normal" it should
 * return 1000. If difficulty is set to "hard" it should return a randomInteger between
 * 600 and 1200.
 *
 * Example: 
 * setDelay("easy") //> returns 1500
 * setDelay("normal") //> returns 1000
 * setDelay("hard") //> returns 856 (returns a random number between 600 and 1200).
 *
 */

/* US02:02 Basic game functionality: Randomness
* The moles need to appear and disappear at
* a certain interval of time. The function takes a difficulty parameter 
* that can have three values: easy, normal, or hard. 
* The function is described in the comment above.
* I call this Time delay for Gamer levels
*/
function setDelay(difficulty) {
  // my code here.
    if (difficulty === "easy") {
      return 1500;
    } else if (difficulty === "normal"){
     return 1000;
    } else if (difficulty === "hard"){
      return randomInteger(600, 1200); 
   }
  }

/**
 * Chooses a random hole from a list of holes.
 *
 * This function should select a random Hole from the list of holes.
 * 1. generate a random integer from 0 to 8 and assign it to an index variable
 * 2. get a random hole with the random index (e.g. const hole = holes[index])
 * 3. if hole === lastHole then call chooseHole(holes) again.
 * 4. if hole is not the same as the lastHole then keep track of 
 * it (lastHole = hole) and return the hole
 *
 * Example: 
 * const holes = document.querySelectorAll('.hole');
 * chooseHole(holes) //> returns one of the 9 holes that you defined */


 /** US02:03 Basic game functionality: Randomness
 * This function should select a random hole 
 * from the list of holes that I defined. 
 * When function is called, it will make sure 
 * that it doesn't return the last hole. */

function chooseHole(holes) {
  // my code here.
  //gets hole at index of random number
  const index = randomInteger(0, 8);
  const hole = holes[index];
  // if hole index matches previous hole, choose different hole.
 if (hole === lastHole) {
  return chooseHole(holes); 
}
lastHole = hole;
return hole;
}
let hole = chooseHole(holes);
/**
*
* Calls the showUp function if time > 0 and stops the game if time = 0.
*
* The purpose of this function is simply to determine if the game should
* continue or stop. The game continues if there is still time `if(time > 0)`.
* If there is still time then `showUp()` needs to be called again so that
* it sets a different delay and a different hole. If there is no more time
* then it should call the `stopGame()` function. The function also needs to
* return the timeoutId if the game continues or the string "game stopped"
* if the game is over.
*
*  // if time > 0:
*  //   timeoutId = showUp()
*  //   return timeoutId
*  // else
*  //   gameStopped = stopGame()
*  //   return gameStopped
*
*/


/**US03:04 Game flow
 * determines if game should continue or stop
 * it is described in detail in comment above
 */
function gameOver() {
  // my code here
  if (time > 0){
  let timeoutId = showUp();
  return timeoutId;
  }else{
  let gameStopped = stopGame();
return gameStopped;
  }
}

/**
*
* Calls the showAndHide() function with a specific delay and a hole.
*
* This function simply calls the `showAndHide` function with a specific
* delay and hole. The function needs to call `setDelay()` and `chooseHole()`
* to call `showAndHide(hole, delay)`.
*
*/

/**US03:03 Game flow
 * this calls the showAndHide() function
 * grabs specific delay and hole
 */

function showUp() {
  let delay = setDelay(difficulty); // TODO: Update so that it uses setDelay()
  const hole = chooseHole(holes);  // TODO: Update so that it use chooseHole()
  return showAndHide(hole, delay);
}
/**
*
* The purpose of this function is to show and hide the mole given
* a delay time and the hole where the mole is hidden. The function calls
* `toggleVisibility` to show or hide the mole. The function should return
* the timeoutID
*
*/

/**US03:02 Game flow
 * toggleVisibility() function is called
 * it adds the show class
 * inside the setTimeout(), the toggleVisibility() function 
 * will also be called so that it removes the show class. 
 * the delay that is given as a parameter is set.
 */
  function showAndHide(hole, delay) {
    toggleVisibility(hole);
    let timeoutID = setTimeout(() => {
      toggleVisibility(hole);
      gameOver();
    }, delay);
  
    return timeoutID;
  }
/**
*
* Adds or removes the 'show' class that is defined in styles.css to 
* a given hole. It returns the hole.
*
*/

/**US-03:01 - Game flow
 * uses classList.toggle() method to remove or add css show class
 * game flow so that a player can start a game and the moles 
 * hide and appear randomly using the functions in the previous 
 * story. show class is used so that the mole class appears 
 * in the respective hole
 */
function toggleVisibility(hole){
  // add hole.classList.toggle so that it adds or removes the 'show' class.
  hole.classList.toggle("show");
  return hole;
}

/**
*
* This function increments the points global variable and updates the scoreboard.
* Use the `points` global variable that is already defined and increment it by 1.
* After the `points` variable is incremented proceed by updating the scoreboard
* that you defined in the `index.html` file. To update the scoreboard you can use 
* `score.textContent = points;`. Use the comments in the function as a guide 
* for your implementation:
*
*/

/**US04:01 Whack!
 * function is described above
 * a condition was added to ensure game is not over so people can't cheat
 */
function updateScore() {
  // my code here
  points++;
  score.textContent = points;
  return points;
}

/**
*
* This function clears the score by setting `points = 0`. It also updates
* the board using `score.textContent = points`. The function should return
* the points.
*
*/

/**US04:02 Whack!
 * used to set points back to 0
 * end user can try again
 */
function clearScore() {
  // my code here
  points = 0;
  score.textContent = points;
  return points;
}

/**
*
* Updates the control board with the timer if time > 0
*
*/

/**US05:02 Timer
 * keeps the timer going on game
 */
function updateTimer() {
  // my code here.
  if (time > 0){
    time -= 1;
    timerDisplay.textContent = time;
  }
  return time;
}

/**
*
* Starts the timer using setInterval. For each 1000ms (1 second)
* the updateTimer function get called. This function is already implemented
*
*/

/**US05:01 Timer
 * function described above
 * this will inform player how many seconds are left
 */
function startTimer() {
  // my code here
  timer = setInterval(updateTimer, 1000);
  return timer;
}

/**
*
* This is the event handler that gets called when a player
* clicks on a mole. The setEventListeners should use this event
* handler (e.g. mole.addEventListener('click', whack)) for each of
* the moles.
*
*/

/**US04:03 Whack!
 * access mole with DOM
 * so when it's clicked 
 * it calls the score
 * then adds points
 */
function whack(event) {
  // my code here.
  setEventListeners();
  updateScore();
  playHitSound(); // Play the "hit" sound when a mole is clicked
  return points;
}

/**
*
* Adds the 'click' event listeners to the moles. See the instructions
* for an example on how to set event listeners using a for loop.
*/

/**US04:04 Whack!
 * set the event listeners so that the event handler gets called when a player clicks on a mole
* Adds the 'click' event listeners to the moles. 
*/
function setEventListeners(){
  // my code here
  moles.forEach((mole) => mole.addEventListener("click", whack));
  return moles;
}

/**
*
* This function sets the duration of the game. The time limit, in seconds,
* that a player has to click on the sprites.
*
*/
function setDuration(duration) {
  time = duration;
  return time;
}

/**
*
* This function is called when the game is stopped. It clears the
* timer using clearInterval. Returns "game stopped".
*
*/
function stopGame(){
  //stopAudio();  //optional
  clearInterval(timer);
  return "game stopped";
}

// adds 'hit' when attempt to return mo-02 to safety hole
function playHitSound() {
  const hitSound = new Audio('assets/hit.mp3');
  hitSound.play();
}

// adding function to play mole song
document.getElementById('start').addEventListener('click', function() {
  document.getElementById('molesong').play();
});

/**
*
* This is the function that starts the game when the `startButton`
* is clicked.
*
*/

/**US03:05 Game flow
 * this function was provided
 * it runs game for 10 seconds
 * and calls for monsters... BOO!
 */
function startGame(){
  setEventListeners();
  startTimer();
  setDuration(25);
  clearScore();
  showUp();
  document.documentElement.classList.add("show-radio-mallet-cursor");
  return "game started";
}

startButton.addEventListener("click", startGame);

// Please do not modify the code below.
// Used for testing purposes.
window.randomInteger = randomInteger;
window.chooseHole = chooseHole;
window.setDelay = setDelay;
window.startGame = startGame;
window.gameOver = gameOver;
window.showUp = showUp;
window.holes = holes;
window.moles = moles;
window.showAndHide = showAndHide;
window.points = points;
window.updateScore = updateScore;
window.clearScore = clearScore;
window.whack = whack;
window.time = time;
window.setDuration = setDuration;
window.toggleVisibility = toggleVisibility;
window.setEventListeners = setEventListeners;
