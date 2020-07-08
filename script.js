const nbg = document.querySelector(".img2");
const enterBtn = document.querySelector(".btn");
const modal = document.querySelector(".albumOverlay");
const header = document.querySelector(".head");
const burger = document.querySelector(".burger");
const navMobile = document.querySelector(".main-nav");

enterBtn.addEventListener("click", showNbg);
burger.addEventListener("click", showNav);

function showNav() {
  burger.classList.toggle("active");
  navMobile.classList.toggle("mobile-nav");
}

function showNbg() {
  modal.classList.toggle("modal-open");
  header.style.transform = "translateY(0%)";
  header.style.opacity = "1";
  setTimeout(() => {
    nbg.style.opacity = ".5";
  }, 700);
}
