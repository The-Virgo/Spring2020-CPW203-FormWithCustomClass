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
