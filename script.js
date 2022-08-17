function computerOption(){
    let option = Math.floor(Math.random()*3 +1);

    if(option == 1) {return "rock"};
    if(option == 2) {return "paper"};
    if(option == 3) {return "scissors"};

}

function creaParrafo(parentNode,contenido){
    const nuevoParrafo = document.createElement("p");
    parentNode.appendChild(nuevoParrafo);
    nuevoParrafo.textContent=contenido;
}

function reseteaParrafo(parentNode){

    console.log(parentNode.hasChildNodes());

    

    while(parentNode.hasChildNodes()){
        parentNode.removeChild(parentNode.firstChild);
    }
    return
    

}

function oneRound(playerInput,computerInput){
    
    reseteaParrafo(divResultados);

    let player = playerInput;

    let computer=computerInput;

    let playerWins=false;

    creaParrafo(divResultados,`You choose "${playerInput}"`);
    creaParrafo(divResultados,`Computer choose "${computerInput}"`);


    if (player === computer){
        creaParrafo(divResultados,"Draw, you both choose the same");
    
        return null;
    }

    else if(player==="scissors" && computer === "paper"){
        creaParrafo(divResultados,`You won, ${playerInput} cuts ${computerInput}`);
        playerWins=true;
    }

    else if(player==="paper" && computer === "rock"){
        creaParrafo(divResultados,`You won, ${playerInput} wraps ${computerInput}`);
        
        playerWins=true;
    }

    else if(player==="rock" && computer === "scissors"){
        creaParrafo(divResultados,`You won, ${playerInput} smash ${computerInput}`);

        playerWins=true;
    }

    else{
        creaParrafo(divResultados,`You lose.`);
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


    let winning = oneRound(userOption,computerOption());

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
const divResultados = document.querySelector(".results");

const buttons = document.querySelectorAll(".selection");

buttons.forEach(button => {
        button.addEventListener('click',function(){
            oneRound(button.id,computerOption())
        });
    
});

//----------- DOM para resultados -------------------






