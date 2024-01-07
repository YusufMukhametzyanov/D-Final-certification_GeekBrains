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

const pricingPlans2El = document.querySelector(".pricingPlans2");
pricingPlans2El.scrollLeft = 253;

const passwordEl = document.querySelectorAll(".password");
const reTypePasswordEl = document.querySelectorAll(".reTypePassword");
const signUpTitleEl = document.querySelectorAll(".signUpTitle");

reTypePasswordEl[1].addEventListener("input", function (e) {
  if (passwordEl[1].value != reTypePasswordEl[1].value) {
    passwordEl[1].style.border = "1px solid red";
    reTypePasswordEl[1].style.border = "1px solid red";
  }
  if (passwordEl[1].value === reTypePasswordEl[1].value) {
    passwordEl[1].style.border = "1px solid green";
    reTypePasswordEl[1].style.border = "1px solid green";
  }
});

passwordEl[1].addEventListener("input", function (e) {
  if (passwordEl[1].value != reTypePasswordEl[1].value) {
    passwordEl[1].style.border = "1px solid red";
    reTypePasswordEl[1].style.border = "1px solid red";
  }
  if (passwordEl[1].value === reTypePasswordEl[1].value) {
    passwordEl[1].style.border = "1px solid green";
    reTypePasswordEl[1].style.border = "1px solid green";
  }
});

reTypePasswordEl[0].addEventListener("input", function (e) {
  if (passwordEl[0].value != reTypePasswordEl[0].value) {
    passwordEl[0].style.border = "2px solid red";
    reTypePasswordEl[0].style.border = "2px solid red";
  }
  if (passwordEl[0].value === reTypePasswordEl[0].value) {
    passwordEl[0].style.border = "2px solid green";
    reTypePasswordEl[0].style.border = "2px solid green";
  }
});

passwordEl[0].addEventListener("input", function (e) {
  if (passwordEl[0].value != reTypePasswordEl[0].value) {
    passwordEl[0].style.border = "2px solid red";
    reTypePasswordEl[0].style.border = "2px solid red";
  }
  if (passwordEl[0].value === reTypePasswordEl[0].value) {
    passwordEl[0].style.border = "2px solid green";
    reTypePasswordEl[0].style.border = "2px solid green";
  }
});
