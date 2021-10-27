function computerPlay(){
    let random = Math.floor(Math.random()*3);
    const playStr = ['Rock','Paper','Scissors'];
    let computerPlayStr = playStr[random];
    return computerPlayStr
}
 



function playRound(playerPlay,computerPlay){
    if(playerPlay == 'rock' && computerPlay=='Rock'){
        return("It's a tie");
    }else if(playerPlay === 'rock' && computerPlay==='Paper'){
        return("You lose!");
    }else if(playerPlay === 'rock' && computerPlay==='Scissors'){
        return("You win!");
    }else if(playerPlay === 'paper' && computerPlay==='Paper'){
        return("It's a tie");
    }else if(playerPlay === 'paper' && computerPlay==='Rock'){
        return("You win!");
    }else if(playerPlay === 'paper' && computerPlay==='Scissors'){
        return("You lose!");
    }else if(playerPlay === 'scissors' && computerPlay==='Paper'){
        return("You win!");
    }else if(playerPlay === 'scissors' && computerPlay==='Rock'){
        return("You lose!");
    }else if(playerPlay === 'scissors' && computerPlay==='Scissors'){
        return("It's a tie");
    }
}


function buttonPressed () {
    
    let playerPoint=0;
    let computerPoint=0;
    const buttonChoice = document.querySelectorAll('.playerChoice');
    buttonChoice.forEach((button) =>{
        button.addEventListener('click', ()=>{
            let playerChoice  = button.textContent.toLowerCase();
            let computerChoice = computerPlay();
            const div = document.querySelector('#result');
            const playerText = document.createElement('p');
            playerText.classList.add('playerText');
            const computerText = document.createElement('p');
            computerText.classList.add('computerText');
            playerText.textContent = 'You chose ' + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
            div.insertBefore(playerText,div.firstChild);
            computerText.textContent = 'Computer chose ' + computerChoice;
            div.insertBefore(computerText,div.childNodes[1]);
            
            let result = playRound(playerChoice,computerChoice);
            if(result.includes('win')){
                ++playerPoint;
            }else if(result.includes('lose')){
                ++computerPoint;
            }

            game(playerPoint,computerPoint,result);
            score(playerPoint,computerPoint);
            if(playerPoint ==5 || computerPoint == 5){
                playerPoint=0;
                computerPoint=0;
            }
            
                    })
        })
}




buttonPressed();


function game(playerPoint,computerPoint,result){
        const divResult = document.querySelector('#result');
        const resultText = document.createElement('p');
        resultText.textContent = result;
        resultText.classList.add('result');
        divResult.insertBefore(resultText,divResult.childNodes[2]);
    
        const div= document.querySelector('#score');
        const playerScoreText = document.createElement('p');
        playerScoreText.textContent = 'Player: ' +playerPoint
        div.replaceChild(playerScoreText,div.firstChild);
        const computerScoreText = document.createElement('p');
        div.appendChild(computerScoreText);
        computerScoreText.textContent = 'Computer: ' +computerPoint;
        div.replaceChild(computerScoreText,div.childNodes[1]);


}
 
function score(player,computer){
    const div = document.querySelector('#result');
    const finalResult = document.createElement('p');
    if(player === 5){
        finalResult.textContent = 'Congratulations, you win';
        finalResult.classList.add('resultMsg');
     
    }else if(computer === 5){
        finalResult.textContent="Game over, Computer wins, try again!";
        finalResult.classList.add('resultMsg');

    }
    div.insertBefore(finalResult,div.firstChild);

}
    
function clear(div){
    while(div.firstChild){
        div.firstChild.remove();
        console.log(div)
    }
}