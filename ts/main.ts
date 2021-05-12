class VideoGame{
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}

function getVideoGame():VideoGame{
    let game = new VideoGame();
    game.title = 
    (<HTMLInputElement>document.getElementById("title")).value;

    game.price = 
    parseFloat((<HTMLInputElement>document.getElementById("price")).value);

    game.rating =
    (<HTMLSelectElement>document.getElementById("rating")).value;

    game.isDigitalOnly = ((<HTMLInputElement>document.getElementById("online")).checked)

    return game;
}

 function displayGame(myGame:VideoGame):void{
     let displayDiv = document.getElementById("display");

     let gameHeading = document.createElement("h2");
     gameHeading.innerText = myGame.title;

     let gameInfo = document.createElement("p");
     let notDigitalDisplay = "not";
     if(myGame.isDigitalOnly){
        notDigitalDisplay = "";
     }
     gameInfo.innerText = myGame.title + " has a rating of " +
                        myGame.rating + ". It costs $" + 
                        myGame.price + " and is " + notDigitalDisplay +  
                        " digital only.";

     displayDiv.appendChild(gameHeading);
     displayDiv.appendChild(gameInfo);
 }

window.onload = function(){
    let addBtn = 
    <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
}

function addVideoGame(){
    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
}

function isAllDataValid(){
    return true;
}