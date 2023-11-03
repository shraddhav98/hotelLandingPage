const nav = document.querySelector(".nav"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");


navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("fa-circle-xmark", "fa-magnifying-glass");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

