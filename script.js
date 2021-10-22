function computerPlay(){
    let random = Math.floor(Math.random()*3);
    const playStr = ['Rock','Paper','Scissors'];
    let computerPlayStr = playStr[random];
    console.log(computerPlayStr);
    return computerPlayStr
}
 



function playRound(playerPlay,computerPlay){
    if(playerPlay == 'rock' && computerPlay=='Rock'){
        return("Computer chose Rock, it's a tie");
    }else if(playerPlay === 'rock' && computerPlay==='Paper'){
        return("Computer chose Paper, you lose!");
    }else if(playerPlay === 'rock' && computerPlay==='Scissors'){
        return("Computer chose Scissors, you win!");
    }else if(playerPlay === 'paper' && computerPlay==='Paper'){
        return("Computer chose Paper, it's a tie");
    }else if(playerPlay === 'paper' && computerPlay==='Rock'){
        return("Computer chose Rock, you win!");
    }else if(playerPlay === 'paper' && computerPlay==='Scissors'){
        return("Computer chose Scissors, you lose!");
    }else if(playerPlay === 'scissors' && computerPlay==='Paper'){
        return("Computer chose Paper, you win!");
    }else if(playerPlay === 'scissors' && computerPlay==='Rock'){
        return("Computer chose Rock, you lose!");
    }else if(playerPlay === 'scissors' && computerPlay==='Scissors'){
        return("Computer chose Scissors, it's a tie");
    }
}



function game(){
    let playerPoint=0;
    let computerPoint=0;
    for(let i=0; i<5;i++){
        let playerChoice =  prompt("1-Rock  2-Paper  3-Scissors").toLowerCase();
        if((playerChoice != 'rock') && (playerChoice != 'paper') && (playerChoice != 'scissors')){
            alert("Not an option");
        }
        let computerChoice = computerPlay();
        let result = playRound(playerChoice,computerChoice);
        console.log(result);
    
        if(result.includes('win')){
            ++playerPoint;
        }else if(result.includes('lose')){
            ++computerPoint;
        }
        console.log("player points " +playerPoint);
        console.log("computer points "+computerPoint)
    }
    score(playerPoint,computerPoint);
}
 
function score(player,computer){
    if(player > computer){
        console.log("Congratulations, you win");
    }else if(player <computer){
        console.log("Computer win");
    }else{console.log("Its a tie")}
}
    

game();