var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
function getVideoGame() {
    var game = new VideoGame();
    game.title =
        document.getElementById("title").value;
    game.price =
        parseFloat(document.getElementById("price").value);
    game.rating =
        document.getElementById("rating").value;
    game.isDigitalOnly = (document.getElementById("online").checked);
    return game;
}
function displayGame(myGame) {
    var displayDiv = document.getElementById("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    var gameInfo = document.createElement("p");
    var notDigitalDisplay = "not";
    if (myGame.isDigitalOnly) {
        notDigitalDisplay = "";
    }
    gameInfo.innerText = myGame.title + " has a rating of " +
        myGame.rating + ". It costs $" +
        myGame.price + " and is " + notDigitalDisplay +
        " digital only.";
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function addVideoGame() {
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function isAllDataValid() {
    return true;
}
