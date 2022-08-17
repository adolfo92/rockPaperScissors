function userOption(){
let userInput = prompt("Pleaser write your option: Rock, paper or scissors?");
return userInput.toLowerCase();
}

function computerOption(){
    let option = Math.floor(Math.random()*3 +1);

    if(option == 1) {return "rock"};
    if(option == 2) {return "paper"};
    if(option == 3) {return "scissors"};

}

function oneRound(playerInput,computerInput){

    let player = playerInput;

    let computer=computerInput;

    let playerWins=false;

    console.log("You choose "+playerInput);
    console.log("Computer choose "+computerInput);

    if (player === computer){
        console.log("Draw");
        return null;
    }

    else if(player==="scissors" && computer === "paper"){
        console.log("You won, "+player+" cuts "+computer);
        playerWins=true;
    }

    else if(player==="paper" && computer === "rock"){
        console.log("You won, "+player+" wraps "+computer);
        playerWins=true;
    }

    else if(player==="rock" && computer === "scissors"){
        console.log("You won, "+player+" smash "+computer);
        playerWins=true;
    }

    else{
        console.log("You lose");
    }

    return playerWins;

}

function game(){ 

    let win = 0;
    let defeat = 0;

    //for(round = 0; round <5; round++){
        // Aca esta la logica de solo 5 partidas      
   // }

   // 5partidas in


    let winning = oneRound(userOption(),computerOption());

    if (winning === true){ win++;}
    if (winning === false){defeat++;}
    
    console.log("wins: "+win+" / defeats: "+defeat);
    // 5partidas out


    if (win>defeat){console.log("Congratz, you won the game");}
    if (win<defeat){console.log("You died");}
    if (win==defeat){console.log("Somehow you got the same answers than the pc. I guess that's a draw.");}

    console.log("End of game");
    
}

//------------- Execution zone ------------------

console.log("Do you wanna play my game?");

playQuestion = prompt("Do you wanna play my game?  y/n").toLowerCase();

while (playQuestion=="y"){

    game();

    playQuestion = prompt("Try again? y/n").toLowerCase();

}

console.log("thanks for playing my game <3");


