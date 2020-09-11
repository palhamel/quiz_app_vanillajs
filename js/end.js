const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
  console.log("Your score will be :", mostRecentScore);
finalScore.innerText = mostRecentScore;


username.addEventListener("keyup", () => {
  // console.log(username.value);
  saveScoreBtn.disabled = !username.value;
  
})

saveHighScore = (e) => {
  console.log("clicked the button!");
  // prevent the form from refreshing - to display console:
  e.preventDefault();
};
