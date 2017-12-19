/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function () {

  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function () {

    const resetButton = $("#reset");
    const numOfResets = $("#num-resets");

    const team1shootButton = $("#teamone-shoot");
    const team1NumOfShots = $("#teamone-numshots");
    const team1NumOfGoals = $("#teamone-numhits");

    const team2shootButton = $("#teamtwo-shoot");
    const team2NumOfShots = $("#teamtwo-numshots");
    const team2NumOfGoals = $("#teamtwo-numhits");
    const sound = new Audio('assets/sounds/HockeyStickSlap.wav');

    resetButton.click(function () {
      numOfResets.html(parseInt(numOfResets.html()) + 1);
      team1NumOfShots.html(0);
      team2NumOfShots.html(0);
      team1NumOfGoals.html(0);
      team2NumOfGoals.html(0);
      $("body").css("background-color", "white");
    })

    team1shootButton.click(function () {
      sound.play();
      team1NumOfShots.html(parseInt(team1NumOfShots.html()) + 1);
      min = Math.ceil(0);
      max = Math.floor(1);
      isHit = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(isHit);
      if (isHit === 1) {
        team1NumOfGoals.html(parseInt(team1NumOfGoals.html()) + 1);
        $("body").css("background-color", "red");
      }
      if (!isHit) {
        $("body").css("background-color", "white");
      }
    })

    team2shootButton.click(function () {
      sound.play();
      team2NumOfShots.html(parseInt(team2NumOfShots.html()) + 1);
      min = Math.ceil(0);
      max = Math.floor(1);
      isHit = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(isHit);
      if (isHit === 1) {
        team2NumOfGoals.html(parseInt(team2NumOfGoals.html()) + 1);
        $("body").css("background-color", "yellow");
      }
      if (!isHit) {
        $("body").css("background-color", "white");
      }
    })


  })

})();
