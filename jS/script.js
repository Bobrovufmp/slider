const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const sideBar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;
const containerHgt = document.querySelector(".container");

let activeSlide = 0;

sideBar.style.top = `-${(slidesCount - 1) * 100}vh`;

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    changeSlide("up");
  } else if (event.key === "ArrowDown") {
    changeSlide("down");
  }
  f;
});

upButton.addEventListener("click", () => {
  changeSlide("up");
});
downButton.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlide++;
    if (activeSlide === slidesCount) {
      activeSlide = 0;
    }
  } else if (direction === "down") {
    activeSlide--;
    if (activeSlide < 0) {
      activeSlide = slidesCount - 1;
    }
  }
  const containerHeight = containerHgt.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlide * containerHeight}px)`;
  sideBar.style.transform = `translateY(${activeSlide * containerHeight}px)`;
}
