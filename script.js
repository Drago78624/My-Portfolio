const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-bar__links");
const navMenuArray = [hamburger, menu];
const navBtn = document.querySelector(".nav-btn");

navMenuArray.forEach((el) => {
  el.addEventListener("click", () => {
    //menu.classList.toggle("u-height-full");
    if (window.getComputedStyle(navBtn).getPropertyValue("display") == "none") {
      menu.classList.toggle("u-height-with-btn");
    }else {
      menu.classList.toggle("u-height-full");

    }
  });
});

const lines = document.querySelectorAll(".line");
const lineClasses = ["line-1", "line-2", "line-3"];

hamburger.addEventListener("click", () => {
  Array.from(lines).forEach((line) => {
    if (line.classList.contains("line-one")) {
      line.classList.toggle(lineClasses[0]);
    } else if (line.classList.contains("line-two")) {
      line.classList.toggle(lineClasses[1]);
    } else {
      line.classList.toggle(lineClasses[2]);
    }
  });
});
