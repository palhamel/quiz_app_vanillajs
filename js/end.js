const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");

username.addEventListener("keyup", () => {
  // console.log(username.value);
  saveScoreBtn.disabled = !username.value;
  
})

saveHighScore = (e) => {
  console.log("clicked the button!");
  // prevent the form from refreshing - to display console:
  e.preventDefault();
};
