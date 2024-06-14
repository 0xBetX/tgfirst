let count = 0;
const countDisplay = document.getElementById("count");
const levelDisplay = document.getElementById("level");
const fish = document.getElementById("fish");

fish.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
  updateLevel();
});

function updateLevel() {
  const level = Math.floor(count / 1000000) + 1;
  levelDisplay.textContent = `lv${level}`;
}
