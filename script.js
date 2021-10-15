//age in days

function ageInDays() {
  let birthYear = prompt("What year wear you born?");
  let agedays = (2021 - birthYear) * 365;
  let h1 = document.createElement("h1");
  let text = document.createTextNode("You are " + agedays + " days old");
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(text);
  document.getElementById("result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

// cat generator

function generate() {
  let image = document.createElement("img");
  let wrap = document.getElementById("cat-wrap");
  image.src =
    "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  wrap.appendChild(image);
}
// Math.floor(Math.random() * 3);
// rock, paper, scssor

function rps(yourPick) {
  console.log(yourPick);
  let human, bot;

  human = yourPick.id;

  bot = rpsPick(randomRps());

   console.log("bot pick", bot);
  result = decideWin(human, bot);
   console.log(result);
  message = finalMessage(result);
  console.log(message);
  rpsGame(yourPick.id, bot, message);

}

function randomRps() {
  return Math.floor(Math.random() * 3);
}

function rpsPick(rpsNum) {
  return ["rock", "paper", "scissors"][rpsNum];
}

function decideWin(yourPick, botPick) {
  let rpsData = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };
  let yourScore = rpsData[yourPick][botPick];
  let botScore = rpsData[botPick][yourPick];

  return [yourScore, botScore];
}
function finalMessage([yourScore, botScore]) {
  if (yourScore === 0) {
    return  {'message': ' You lost! bleeeh!', 'color': 'red'};
  } else if (yourScore === 0.5){
    return {'message': "Wew! it's a draw", 'color': 'yellow'};
  } else {
     return {'message': "You won Noob!", 'color': 'green'};
  };
}
function rpsGame(humanImgPick, botImgPick, finalMessage){
  let imgData ={
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src
  }
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  let humanDiv = document.createElement('div');
  let botDiv = document.createElement('div');
  let messageDiv = document.createElement('div');

  humanDiv.innerHTML = "<img src='" + imgData[humanImgPick] + "' style='box-shadow: -2px 2px 26px 4px rgb(18, 6, 184);' >"
  messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 50px; padding: 20px; '>" + finalMessage['message'] + "</h1>"
  botDiv.innerHTML = "<img src='" + imgData[botImgPick] + "' style='box-shadow: -2px 2px 26px 4px rgb(18, 6, 184);' >"

  document.getElementById('rps-wrapper').appendChild(humanDiv);
  document.getElementById('rps-wrapper').appendChild(messageDiv);
  document.getElementById('rps-wrapper').appendChild(botDiv);

}
