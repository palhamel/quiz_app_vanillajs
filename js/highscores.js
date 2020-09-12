// grab id element
const highScoresList = document.getElementById("highScoresList");
// grab data from localstorage
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// console.log(highScores);

const highScoreListItems = highScores.map( score => {
  return `<li class="high-score"> 🏆 ${score.name} on ${score.score} points</li>`;
}).join("")

// push html to page
highScoresList.innerHTML = highScoreListItems;

