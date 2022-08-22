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
        
    }

    return playerWins;

}


//------------- Execution zone ------------------
const divResultados = document.querySelector(".results");

const buttons = document.querySelectorAll(".selection");

let winning;
let rounds = 0;
let win = 0;
let defeat = 0;

if (rounds <5){

buttons.forEach(button => {

        button.addEventListener('click',function(){
            
            

            winning = oneRound(button.id,computerOption())

            if (rounds==4){
                reseteaParrafo(divResultados);
                if (win>defeat){creaParrafo(divResultados,`Congratz, you won the game`);}
                if (win<defeat){creaParrafo(divResultados,`Congratz, you Died`);}
                if (win==defeat){creaParrafo(divResultados,`Somehow you got the same answers than the pc. I guess that's a draw.`);}
                creaParrafo(divResultados,"End of game");
                creaParrafo(divResultados,`Wins: ${win} /  Defeats: ${defeat} `);
                creaParrafo(divResultados,`Round: ${++rounds}`);
                rounds = 0;
                win =0;
                defeat = 0;
                return;
            }
           
            if (winning === true){ win++;}

            if (winning === false){defeat++;}

            creaParrafo(divResultados,`Wins: ${win} /  Defeats: ${defeat} `)

            rounds++;

            creaParrafo(divResultados,`Round: ${rounds}`);
                    

        });
    
});


}
//----------- DOM para resultados -------------------


//



