// Set initial coune value
let count = 0;

// id value
let value = document.querySelector("#value");

// All buttons
const btns = document.querySelectorAll(".btn");

// (e).currentTearget do determine which button
btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }

    if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
