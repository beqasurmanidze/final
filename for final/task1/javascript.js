let showBtn = document.querySelector(".showBtn");

let hide = document.querySelector(".hide");
// showBtn.addEventListener("click", function () {
// hide.classList.toggle("hideBtn");
// hide.classList.toggle("showBtn");
// });

showBtn.addEventListener("click", function () {
  hide.classList.add("showBtn");
  hide.classList.add("hideBtn");
});

let hideBtn = document.querySelector(".btn2");

hideBtn.addEventListener("click", function () {
  hide.classList.remove("ShowBtn");
  hide.classList.remove("hideBtn");
});
