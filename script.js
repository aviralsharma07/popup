let popup = document.getElementById("popup");
let submitbtn = document.querySelector(".btn");
let closebtn = document.getElementById("closebtn");

submitbtn.addEventListener("click", function () {
  popup.classList.add("open-popup");
});

closebtn.addEventListener("click", function () {
  popup.classList.remove("open-popup");
});
