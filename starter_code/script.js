window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };



  function startGame() {
    $("#start-button").click(function () {
        $("#SplashScreen").hide();
        $("#game-board").show();
    });
  }
}; //<--- window.onload function close.

var canvas = document.getElementById('game-board');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');
