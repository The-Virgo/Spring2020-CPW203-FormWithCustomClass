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
function clearAllErrors() {
    var errSummary = document.getElementById("validation-summary");
    errSummary.innerHTML = "";
}
function addVideoGame() {
    clearAllErrors();
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function isAllDataValid() {
    var isValid = true;
    var title = document.getElementById("title").value;
    if (title == "") {
        isValid = false;
        var errSummary = document.getElementById("validation-summary");
        var errItem = document.createElement("li");
        errItem.innerText = "Title is required";
        errSummary.appendChild(errItem);
    }
    var price = document.getElementById("price").value;
    var priceValue = parseFloat(document.getElementById("price").value);
    if (price == "" || priceValue == NaN) {
        isValid = false;
        var errSummary = document.getElementById("validation-summary");
        var errItem = document.createElement("li");
        errItem.innerText = "Price is required and must be a number";
        errSummary.appendChild(errItem);
    }
    var rating = document.getElementById("rating").value;
    if (rating == "") {
        isValid = false;
        var errSummary = document.getElementById("validation-summary");
        var errItem = document.createElement("li");
        errItem.innerText = "A rating must be selected";
        errSummary.appendChild(errItem);
    }
    return isValid;
}
