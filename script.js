const menuEl = document.querySelector(".menuIcon");
const menuElActive = document.querySelector(".menuIcon2");
const navForAdaptiveEl = document.querySelector(".navForAdaptive");

document.addEventListener("click", function (e) {
  if (e.target.className === "menuIcon") {
    navForAdaptiveEl.style.display = "flex";
    menuEl.style.display = "none";
    menuElActive.style.display = "flex";
  }
  if (e.target.className === "menuIcon2_") {
    navForAdaptiveEl.style.display = "none";
    menuEl.style.display = "flex";
    menuElActive.style.display = "none";
  }
});

// menuEl.addEventListener("click", function (e) {
//   menuEl.style.display = "none";
//   menuElActive.style.display = "flex";
//   navForAdaptiveEl.style.display = "flex";
// });

// menuElActive.addEventListener("click", function (e) {
//   menuElActive.style.display = "none";
//   menuEl.style.display = "flex";
//   navForAdaptiveEl.style.display = "none";
// });

navForAdaptiveEl.addEventListener("mouseover", function (e) {
  menuEl.style.display = "none";
  menuElActive.style.display = "flex";
  navForAdaptiveEl.style.display = "flex";
});

navForAdaptiveEl.addEventListener("mouseout", function (e) {
  menuElActive.style.display = "none";
  menuEl.style.display = "flex";
  navForAdaptiveEl.style.display = "none";
});
