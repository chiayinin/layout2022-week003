"use strict";

var hamburger = document.querySelector('.hamburger');
var navMenu = document.querySelector('.navbar__menu');
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.navbar__link').forEach(function (e) {
  return e.addEventListener('click', function () {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});
navMenu.addEventListener('click', function () {
  console.log("123");
});
//# sourceMappingURL=all.js.map
