# Whack-a-Monster!

A local game development studio has decided to create a new game that's based on Whack-A-Mole. If you've ever been to an arcade, you have probably seen or played Whack-A-Mole. It's a game in which a player uses a mallet to hit toy moles, which appear at random, back into their holes.

The game designers have asked me to come up with a computer version of this game. They have provided some source code, but it still needed to be completed. 
I came up with an original visual design for this game.
This code uses: JavaScript, HTML, and CSS skills that I've learned in my Web Development program to give the game a unique feel.

![readme](https://github.com/user-attachments/assets/a3f2bf8d-4e76-4e54-961e-f0828c09a082)


## Steps complete

Implemented the following:

- Wrote code that passes all of the requirements in the project rubric, [Original](https://github.com/Thinkful-Ed/js-dev-final-capstone-starter-whack-a-mole)

# Existing files

|Folder/file path	|Description|
|------|-----|
| `index.html` |	The HTML document that holds the game structure. Modified this file so that the tests pass. |
| `src/styles.css` |	The CSS file that holds the styling of the game. Made optional changes to the file to change the appearance.|
| `src/index.js` | The JS file that holds the functionality of the game. Changed this file for the tests to pass. |
| `test/solution.test.js` | This file holds the unit tests of the game.|

### Reminder: Secure your progress with regular commits

As I worked on this project, I did not forget the golden rule of coding: **commit early, commit often**. Each commit acts as a snapshot of my progress, safeguarding my work against unexpected issues and showcasing my methodical approach to problem-solving.

- **Feature complete?** Commited it.
- **Made noticeable progress?** Commited it.
- **Project stretching over days or weeks?** That's even more reason I commit regularly.

By committing after completing features or making significant progress, I ensured that my GitHub timeline reflects the depth and breadth of my work. This habit is invaluable, not just for keeping my work secure, but also for demonstrating my dedication and reliability to future employers. It's a practice that sets me apart in the tech world.

# User Stories

User stories aren't just tasks; they're my training ground for real-world software engineering. As I worked through them:

1. **Interpreting requirements**: I've learned to translate user needs into technical features, a key skill in software development.
  
2. **Prioritization**: Tackling stories in order simulates real project timelines and taught me to build features systematically.

3. **Problem-solving**: Trying to solve challenges independently before seeking help mirrors the self-sufficiency expected in professional roles.

4. **Meeting standards**: Adhering to acceptance criteria parallels quality assurance practices, ensuring my work meets user expectations.

5. **Effective communication**: Documenting my progress and marking TODOs in code improves clarity and teamwork, crucial in collaborative environments.

6. **Adaptability**: Facing and overcoming obstacles enhanced my adaptability and promotes continuous learning, essential in the ever-evolving tech landscape.

Each story I completed is a step towards job readiness, embodying the skills and mindset sought after by employers in the tech industry.

My work meets the functionality as described in the *acceptance criteria* of each user story. Find the *TODO* comments in the code and create the necessary functionality.


## US-01 - Basic game structure

The game has the basic structure for it to function. The game has a name, some basic board controls such as a start button, a score, and a timer display. The game has nine holes and moles defined.

#### 1. Add a title to the game, surrounded by `h1` tags.

Added the name 'whack-a-monster'. Surrounded my title in `h1` tags. Assigned an `id` attribute to the `h1` tag and set the `id` attribute's value to a string of `"title"` for the test to pass. It should look something like this:

```html
<h1 id="title"> My game!! </h1>
```

#### 2. Add nine holes and moles to the grid in `index.html`

The `index.html` file  has only two holes defined. The game should have up to nine holes defined. Added the missing holes and moles to the HTML file.

```html
    <div class="grid">
      <div id="hole0" class="hole">
        <div id="mole0" class="mole"></div>
      </div>
      <div id="hole1" class="hole">
        <div id="mole1" class="mole"></div>
      </div>
      
      <!-- TODO: Add the missing holes and moles to the grid -->

```

#### 3. Define a `start` button in `index.html`

The game needs a `start` button so that a player can start playing the game. Added a `button` tag with `start` set as the `id`.

```html
<button id="start">start</button>
```

#### 4. Use `querySelector()` or `querySelectorAll()` to access the elements in `index.js`

I have defined most of the HTML structure! Access the elements in JavaScript. Go to `src/index.js` and take some time to analyze the query selectors. You should see something like this:

```js
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const startButton = document.querySelector('#start');
// TODO: Add the missing query selectors:
const score; // Use querySelector() to get the score element
const timerDisplay; // use querySelector() to get the timer element.
```

Use `querySelector()` to get the missing `score` and `timer` elements.

#### Acceptance criteria

1. The title is surrounded by `h1` tags and has `title` set as `id`.
1. Nine holes and moles are declared in the HTML file as `div` elements.
1. A `start` button is defined in the HTML file.
1. The missing query selectors for the score and timer were added in the `index.js` file.

## US-02 - Basic game functionality: Randomness

The HTML of my game all set up. Now, it's time to implement some of the game functionality in JavaScript. The moles (or other chosen entity) need to appear and disappear randomly.

#### 1. `randomInteger(min, max)`

The function takes two values as parameters to limit the range of the number to be generated. For example, calling `randomInteger(0,10)` will return a random integer between 0 and 10. Calling `randomInteger(10,200)` will return a random integer between 10 and 200.
 
_**Note:** This function is already implemented for me.

#### 2. `setDelay(difficulty)`
Implemented the `setDelay(difficulty)` function. The moles need to appear and disappear at a certain interval of time.  The function takes a `difficulty` parameter that can have three values: `easy`, `normal`, or `hard`. If difficulty is `easy`, then the function returns a time delay of 1,500 milliseconds (or 1.5 seconds). If the difficulty is set to `normal`, it should return 1,000. If difficulty is set to `hard`, it should return a `randomInteger` between 600 and 1,200.

```js
setDelay("easy") //> Returns 1500
setDelay("normal") //> Returns 1000
setDelay("hard") //> Returns 856 (returns a random number between 600 and 1200).
```

#### 3. `chooseHole(holes)`
 Implemented the `chooseHole(holes)` function. This function should select a random hole from the list of holes that you defined. When function is called, it ensures it doesn't return the last hole.
 
 ```js
 const holes = document.querySelectorAll('.hole');
 chooseHole(holes) //> Returns one of the 9 holes that you defined
 ```
 
 Used the following pseudocode as a guide for my implementation.
 
 ```
 function chooseHole(holes){
   // 1. Generate a random integer from 0 to 8 and assign it to an index variable.
   // 2. Get a random hole with the random index (e.g., const hole = holes[index]).
   // 3. if hole === lastHole, then call chooseHole(holes) again because you don't want to return the same hole.
   // 4. if hole is not the same as the lastHole, then keep track of it (lastHole = hole) and return the hole.
 }
 ```

#### Acceptance criteria

1. The `randomInteger()` function works as expected.
2. The `setDelay()` function returns the correct values when a difficulty is set.
3. The `chooseHole()` function returns a random hole as specified in the pseudocode above.


## US-03 - Game flow

In the previous user story, I implemented some of the basic functions necessary for the game to work correctly.

In this user story, I implement the game flow so that a player can start a game and the moles hide and appear randomly using the functions that I created in the previous story.

#### 1. `toggleVisibility(hole)`

In this case, I am asked to use `classList.toggle()` so that it adds or removes the `show` class. In the `styles.css` file, notice how the `show` class is used so that the mole class appears in the respective hole:

```
function toggleVisibility(hole){
  // TODO: Add hole.classList.toggle() so that it adds or removes the show class.
  
  return hole
}
```

#### 2. `showAndHide(hole)`

The purpose of this function is to show and hide the mole given a delay time and the hole where the mole is hidden. The `toggleVisibility()` function is called that I just created. First, call the function so that it adds the `show` class. Then, inside the `setTimeout()`, the `toggleVisibility()` function will also need to be called so that it removes the `show` class. Set the delay that is given as a parameter. 

```js
function showAndHide(hole, delay){
  // TODO: Call the toggleVisibility() function so that it adds the show class.
  
  const timeoutID = setTimeout(() => {
    // TODO: Call the toggleVisibility() function so that it removes the show class when the timer times out.
    
    gameOver();
  }, 0); // TODO: Change the setTimeout() delay to the one provided as a parameter
  return timeoutID;
}
```
#### 3. `showUp()`

This function simply calls the `showAndHide()` function with a specific delay and hole. The function calls `setDelay()` and `chooseHole()` to call `showAndHide(hole, delay)`.

```js
function showUp() {
  let delay = 0; // TODO: call setDelay()
  const hole = 0; // TODO: call chooseHole()
  return showAndHide(hole, delay);
}
```

#### 4. `gameOver()`

The purpose of this function is simply to determine if the game should continue or stop. The game continues if there is still time (`if(time > 0)`). If there is still time, then `showUp()` needs to be called again so that it sets a different delay and a different hole. If there is no more time, then it should call the `stopGame()` function. The function also needs to return the `timeoutId` if the game continues or the string `"game stopped"` if the game is over. The time will be addressed in US-05.

```js
function gameOver() {
  // if time > 0:
  //   timeoutId = showUp()
  //   return timeoutId
  // else
  //   gameStopped = stopGame()
  //   return gameStopped
}
```
#### 5. `startGame()`

This is the function that starts the game when the `start` button is clicked.

```js
function startGame(){
  // setDuration(10);
  // showUp();
  // return "game started";
}
```
_**Note:** This function is provided to me.

#### Acceptance criteria

1. The `toggleVisibility()` function works as expected and uses `hole.classList.toggle()` to add or remove the `show` class.
2. The `showAndHide()` calls `toggleVisibility()` to show or hide a mole after a delay of time using the `setTimeout()` function provided.
3. The `showUp()` function calls `setDelay()`  and `chooseHole()` to set a delay and hole used to call `showAndHide()`.
4. The `gameOver()` function works as described in the pseudocode provided.
5. The `startGame()` function works as expected.


## US-04: Whack!

The moles now show and hide, but nothing happens when a user clicks on them. In this user story, I was tasked to implement the functions that handle the clicking events and scoring.

#### 1. `updateScore()`

This function increments the `points` global variable and updates the scoreboard.  Use the `points` global variable that is already defined and increment it by 1. After the `points` variable is incremented, proceed by updating the scoreboard that you defined in the `index.html` file. To update the scoreboard use `score.textContent = points;`. Used the comments in the following function as a guide for my implementation.

```js
function updateScore() {
  // Increment the points global variable by 1 point
  // Update score.textContent with points.
  // Return points;
}

```

#### 2. `clearScore()`

This function is similar to `updateScore()`, but instead of incrementing the scoreboard, it resets it to 0. This is necessary if the game finishes and the player wants to play again.

```js
function clearScore() {
  // set the points global variable to 0
  // update score.textContent 
  // return points;
}
```

#### 3. `whack(event)`

This is an event handler that simply calls the `updateScore()` function to increment the score if a mole has been clicked by the player.

```js
function whack(event) {
  // call updateScore();
  // return points;
}
```
#### 4. `setEventListeners(moles)`

I defined an event handler in the previous step. Now, it's time to set the event listeners so that the event handler gets called when a player clicks on a mole.

```js
function setEventListeners(){
  // forEach mole add the whack event handler when a player clicks on the mole.
  // return moles;
}

```
#### Acceptance criteria

1. The score points increment by 1, and the scoreboard is updated when `updateScore()` is called.
2. The `clearScore()` function sets the points to 0, and the scoreboard is updated accordingly.
3. `setEventListeners(moles)` adds a click event listener to each of the moles.
4. `whack(event)` calls `updateScore()` when a player clicks on a mole. 

## US-05: Timer

The game needs a timer that informs the player how many seconds they have left. I've used `setInterval()` to create a timer. 

#### 1. `startTimer()`

Implement the `startTimer()` function in the game. 

```js
function startTimer() {
  timer = setInterval(updateTimer, 1000);
  return timer;
}
```

#### 2. `updateTimer()`

Implement the `updateTimer()` function in the game:

```js
function updateTimer() {
  if (time > 0){
    time -= 1;
    timerDisplay.textContent = time;
  }
  return time;
}
```
#### Acceptance criteria

1. `startTimer()` and `updateTimer()` work as expected.
2. The timer displays in the game.


## US-06: Originality

My ability to innovate and personalize projects is highly valued in the tech industry, as it showcases my problem-solving skills, creativity, and attention to detail. Here's why my game stands out!

Read the following suggestions and implement whatever you want. There are no unit tests for this user story, but originality will be considered in the rubric.

#### 1. Change the look of the game.

The game looks great, but it looks similar to the games of some  other students in the program. I hacked the `styles.css` file and made some changes to make my game look unique. 

I changed the background, the sprites, the fonts, and the general appearance of the game. 

I use monsters instead of moles? 

#### 2. Audio FX and music

A game without sound FX and music can be pretty boring. I added audio files to play a song during game play and a hit noise with the click.



## US-07: Deploying to GitHub
[Website-GameLink](https://diamonddevelop.github.io/whack-a-monster/) 
[GitHubRepo](https://github.com/DiamondDevelop/whack-a-monster)


#### Acceptance criteria

1. The project is deployed to GitHub. 

# Success criteria

Functionality:
- The sprites appear and disappear randomly, and the score is incremented when a player clicks on the sprite.
- The game includes a timer that tells the player how many seconds they have left.
- The game is deployed to GitHub.
- The game presents some aspects of originality and creativity, as specified in US-06.

General code organization:
- Minimal code duplication
- Comments are used to describe the functions.

# Fun Conspiracy Theory 
In a forgotten corner of Bridgeton, Missouri, lies the **West Lake Landfill**—a place shrouded in mystery and danger. Once a limestone quarry, it transformed into an unlined mixed-waste landfill in the 1950s. But this wasn't just any landfill; it harbored secrets that would alter the fate of our creature.

**Radioactive Waste Origins:**
Decades ago, during the height of scientific experimentation, the **Mallinckrodt Chemical Works** played a role in the Manhattan Project and nuclear weapons production. Among their byproducts was **leached barium sulfate**, a material with low relative radioactivity. Illegally, this radioactive waste found its way to West Lake Landfill, where it mingled with 39,000 tons of topsoil, diluting the contamination.

**The Transformation:**
As the waste seeped into the earth, it altered the very fabric of the land. The once-vibrant soil turned sickly, and the groundwater absorbed its toxic essence. Our creature, unbeknownst to it, emerged from this tainted ground—a fusion of nature and radiation.

**The Creature's Birth:**
Its fuzzy form took shape, its stripes mirroring the layers of contaminated soil. Antennas sprouted from its head, sensing the unseen energies that permeated the air. It burrowed deeper, seeking refuge from the harsh surface—a place where no other creature dared tread.

**The Glow of Mutation:**
The radioactive glow infused its cells, granting it resilience and an otherworldly hue. Its eyes, once ordinary, now shimmered with an eerie light. The creature adapted, finding sustenance in the mutated fungi and roots that thrived on the landfill's fringes.

**A Toxic Home:**
Our creature's burrow became its sanctuary—a cocoon of survival. The ground above crackled with unseen energy, and the air tasted of decay. Yet, it thrived, its fuzzy body absorbing the very essence of its surroundings.

And so, our underground dweller—born from waste, shaped by radiation—explores its subterranean world. Its existence a testament to resilience, a reminder that even in the bleakest of landscapes, life persists. 🌱🌸🐛

Some cited information for Fun Conspiracy Theory:
(1) West Lake Landfill - Wikipedia. (https://en.wikipedia.org/wiki/West_Lake_Landfill).
(2) Radioactive 'Tomb' in Pacific Filled With Nuclear Waste Is Starting to .... (https://www.sciencealert.com/a-tomb-in-the-marshall-islands-contains-a-huge-amount-of-radioactive-waste).
(3) Radioactive Waste on Skull Valley Goshute Indian Reservation, USA. (https://ejatlas.org/conflict/radioactive-waste-on-skull-valley-goshute-indian-reservation-usa).



