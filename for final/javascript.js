let redBtn = document.querySelector(".btnEdit");

let greenBtn = document.querySelector(".green");

let blueBtn2 = document.querySelector(".blueBtn");

let container = document.querySelector(".container");
let container2 = document.querySelector(".container2");
let container3 = document.querySelector(".container3");
console.log(greenBtn);

redBtn.addEventListener("click", function () {
  let redCont = document.createElement("div");
  redCont.classList.add("redColor");
  redCont.textContent = "red Box";
  container.appendChild(redCont);
});

greenBtn.addEventListener("click", function () {
  let greenCont = document.createElement("div");
  greenCont.classList.add("greenColor");
  greenCont.textContent = "green box";
  container2.appendChild(greenCont);
});
console.log(blueBtn2);
blueBtn2.addEventListener("click", function () {
  let blueCont = document.createElement("div");
  blueCont.classList.add("blueColor");
  blueCont.textContent = "blue box";
  container3.appendChild(blueCont);
});
