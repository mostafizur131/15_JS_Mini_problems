const para = document.querySelector("#css_manipulate").children[0];
const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  para.classList.toggle("yellow");
});
