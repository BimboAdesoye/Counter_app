let heading = document.querySelector("h2");
let reset = document.querySelector(".res");
let increase = document.querySelector(".inc");
let decrease = document.querySelector(".dec");
let determinant = 0;

decrease.addEventListener("click", () => {
  determinant--;
  heading.innerText = determinant;
  if (determinant < 0) {
    document.body.style.backgroundColor = "red";
  }
});

increase.addEventListener("click", () => {
  determinant++;
  heading.innerText = determinant;
  if (determinant > 0) {
    document.body.style.backgroundColor = "green";
  }
});

reset.addEventListener("click", () => {
  determinant = 0;
  heading.innerText = determinant;
  if (determinant === 0) {
    document.body.style.backgroundColor = "yellow";
  }
});
