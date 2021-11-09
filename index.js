/** @format */

const counter = document.getElementById("counter");
const preBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const allBtns = document.querySelectorAll(".btnColor");
let count = 0;
allBtns.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.classList.contains("prevBtn")) {
      count--;
    } else if (button.classList.contains("nextBtn")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      counter.style.color = "green";
    }
    if (count < 0) {
      counter.style.color = "red";
    }
    if (count === 0) {
      counter.style.color = "black";
    }
    counter.innerHTML = count;
  });
});
