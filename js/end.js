const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
// console.log("Your score will be :", mostRecentScore);

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  // console.log(username.value);
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  console.log("clicked the button!");
  // prevent the form from refreshing - to display console:
  e.preventDefault();

  const score = {
    // score: mostRecentScore,
    score: Math.floor(Math.random() * 100),
    name: username.value,
  };
  // push to Array:
  highScores.push(score);
 // Sort the Array + Keep only top 5:
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5)

  localStorage.setItem("highScores", JSON.stringify(highScores));

  window.location.assign("/");

  console.log("highScores Array:", highScores);
};

  /*
  When you pass the function (a, b) => a - b, you’re telling the .sort() function to sort the numbers in ascending order.
  This is same as:
  highScores.sort( (a, b) => {
    return 
  })
  */
