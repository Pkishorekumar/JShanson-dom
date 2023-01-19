let initialscore = 100;
let highscore = null;
let randomnumber = generateRandomInteger(100);
function game() {
  document.getElementById("one1").value = "";
  document. getElementById("five").textContent = 100;
  document.getElementById("sc").textContent = "Start guessing...";
  document.body.style.backgroundColor = "#222";
  document.getElementById("three").style.height = "12rem";
  document.getElementById("three").textContent = "?";
  randomnumber = generateRandomInteger(100);
}

function generateRandomInteger(max) {
  return Math.floor(Math.random() * max) + 1;
}

function check() {
  let inputnumber = document.getElementById("one1").value;

  if (initialscore !== 0) {
    if (inputnumber > randomnumber) {
      document.getElementById("four").textContent = "Your Guess Is High";
      initialscore--;
      document.getElementById("five").textContent = initialscore;
    } else if (inputnumber < randomnumber) {
      document.getElementById("four").textContent = "Your Guess Is Low";
      initialscore--;
      document.getElementById("five").textContent = initialscore;
    } else {
      document.getElementById("four").textContent =  "🤩🤩 Hurray You Won 🤩🤩";
       
      document.body.style.backgroundColor = "green";
      initialscore--;
      document.getElementById("five").textContent = initialscore;
      document.getElementById("three").textContent = randomnumber;
      document.getElementById("three").style.height = "10rem";
      highscore = initialscore;
      document.getElementById("highscore").textContent = highscore;
      document.getElementById("check").style.visibility = "hidden";
    }
  } 
  else{
    document.getElementById("four").textContent ="Game Over 🙂 🙂 your score is 0";
      
  }
}