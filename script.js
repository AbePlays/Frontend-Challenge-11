var switchButton = document.querySelector(".switch--Button");
var ball = document.querySelector(".ball");
var count = 0;

switchButton.addEventListener("click", () => {
  if (count === 0) {
    ball.style.left = "28px";
    count = 1;
  } else {
    ball.style.left = "4px";
    count = 0;
  }
});
