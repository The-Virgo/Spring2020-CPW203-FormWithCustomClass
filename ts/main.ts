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
     //Display video game below the form
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