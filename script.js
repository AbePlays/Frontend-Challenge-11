var switchButton = document.querySelector(".switch--Button");
var ball = document.querySelector(".ball");
var count = 0;

var price1 = document.querySelector(".price1");
var price2 = document.querySelector(".price2");
var price3 = document.querySelector(".price3");

switchButton.addEventListener("click", () => {
  if (count === 0) {
    ball.style.left = "28px";
    count = 1;
    price1.innerText = "19.99";
    price2.innerText = "24.99";
    price3.innerText = "39.99";
  } else {
    ball.style.left = "4px";
    count = 0;
    price1.innerText = "199.99";
    price2.innerText = "249.99";
    price3.innerText = "399.99";
  }
});
