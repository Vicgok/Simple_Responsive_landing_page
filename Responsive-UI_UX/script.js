const menuWindow = document.querySelector(".nav-drop-down");
const menuOpen = document.querySelector(".btn-menu");
const landingContents = document.querySelectorAll(".landing");
const navH1 = document.querySelector("nav h1");

const navMenuWrap = document.querySelector(".nav-menu-wrapper");
const navMenuText = document.querySelector(".nav-menu-wrapper ul");

const skillText = document.querySelector(".landing h2 span");
navOpen = false;

const skill = ["Frontend Developer", "UI/UX Designer", "Freelancer"];

let index = 0;

menuOpen.addEventListener("click", () => {
  if (!navOpen) {
    menuOpen.classList.add("open");
    menuWindow.classList.add("open");
    navH1.style.cssText = `opacity:0`;

    setTimeout(() => {
      landingContents.forEach((i) => {
        i.classList.add("hide");
      });
    }, 300);

    navOpen = true;
  } else {
    menuOpen.classList.remove("open");
    menuWindow.classList.remove("open");
    navH1.style.cssText = `opacity:1`;

    setTimeout(() => {
      landingContents.forEach((i) => {
        i.classList.remove("hide");
      });
    }, 200);

    navOpen = false;
  }
});

window.onload = () => {
  setInterval(() => {
    skillText.textContent = skill[index];
    index++;
    if (index >= skill.length) {
      index = 0;
    }
  }, 1500);

  setTimeout(() => {
    skillText.style.cssText = `opacity:0; animation: fade 1.5s ease-out infinite;`;
  }, 3000);
};
