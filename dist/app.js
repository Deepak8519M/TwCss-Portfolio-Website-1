const sideMenu = document.querySelector("#sideMenu");

const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu() {
  sideMenu.style.transform = "translateX(-16rem)";
}
function closeMenu() {
  sideMenu.style.transform = "translateX(16rem)";
}

window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    navBar.classList.add(
      "bg-white/50", // Ensures transparency
      "backdrop-blur-lg",
      "shadow-sm"
    );
    navLinks.classList.remove("bg-white/50", "shadow-sm", "backdrop-blur-lg");
  } else {
    navBar.classList.remove("bg-white/50", "backdrop-blur-lg", "shadow-sm");
    navLinks.classList.add("bg-white/50", "shadow-sm", "backdrop-blur-lg");
  }
});

// script.js
const toggle = document.getElementById("toggle-dark");
toggle.addEventListener("click", () => {
  console.log("Hello");
  document.documentElement.classList.toggle("dark");
});
