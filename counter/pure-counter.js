let count = 0;

const countText = document.querySelector("#count");

const btnPlus = document.querySelector("#plus");
const btnMinus = document.querySelector("#minus");
btnPlus.addEventListener("click", () => {
  count++;
  countText.textContent = count;
  console.log(count);
});
btnMinus.addEventListener("click", () => {
  count--;
  countText.textContent = count;
  console.log(count);
});
