  let userScore=0;
  let computerScore=0;
  const userScore_span=document.getElementById("user-score");
  const computerScore_span=document.getElementById("computer-score");
  const scoreBoard_div=document.querySelector(".score-board");
  const result_p = document.querySelector(".result > p");
  const rock_div= document.getElementById("r");
  const paper_div= document.getElementById("p");
  const scissors_div= document.getElementById("s");



function getComputerChoice(){
  const choices=['r','p','s'];
  const randomNumber= Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function toWord(letter){

  if(letter==="r") return "Rock";
  if(letter==="p") return "Paper";

  return "Scissors";



}

function win(userChoice,computerChoice){
  userScore++;
  userScore_span.innerHTML=userScore;
  computerScore_span.innerHTML=computerScore;
  result_p.innerHTML= toWord(userChoice) + " beats " + toWord(computerChoice) + ". You win !  \u{1F600} ";
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow')} , 1000 )
}

function lose(userChoice,computerChoice){
  computerScore++;
  userScore_span.innerHTML=userScore;
  computerScore_span.innerHTML=computerScore;
  result_p.innerHTML= toWord(userChoice) + " loses " + toWord(computerChoice) + ". You lost ! \u{1F606} ";
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow')} , 1000 )
}

function draw(userChoice,computerChoice){


  result_p.innerHTML= toWord(userChoice) + " equals " + toWord(computerChoice) + ". It's a draw ! \u{1F611}";
  document.getElementById(userChoice).classList.add('gray-glow');
  setTimeout(function() { document.getElementById(userChoice).classList.remove('gray-glow')} , 1000 )
}


function game(userChoice){
  const computerChoice= getComputerChoice();

  switch(userChoice+computerChoice){
    case "rs":   win(userChoice,computerChoice); break;
    case "pr":   win(userChoice,computerChoice); break;
    case "sp":   win(userChoice,computerChoice); break;



    case "rp":   lose(userChoice,computerChoice); break;
    case "ps":   lose(userChoice,computerChoice); break;
    case "sr":   lose(userChoice,computerChoice); break;
    break;


    case "rr":   draw(userChoice,computerChoice); break;
    case "pp":   draw(userChoice,computerChoice); break;
    case "ss":   draw(userChoice,computerChoice); break;
    break;

  }

}

function main()
{
      rock_div.addEventListener('click',function()
    {
      game("r");
    })

    scissors_div.addEventListener('click',function()
    {
    game("s");
    })

    paper_div.addEventListener('click',function()
    {
    game("p");
    })
}

main();
