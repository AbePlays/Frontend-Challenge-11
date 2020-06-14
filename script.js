var switchButton = document.querySelector(".switch--Button");
var ball = document.querySelector(".ball");
var count = 0;

switchButton.addEventListener("click", () => {
  if (count % 2 === 0) {
    ball.style.left = "28px";
  } else {
    ball.style.left = "4px";
  }
  count++;
});
