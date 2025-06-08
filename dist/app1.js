

// light mode and dark mode functionality

// document.documentElement.classList.toggle(
//   "dark",
//   localStorage.theme === "dark" ||
//     (!("theme" in localStorage) &&
//       window.matchMedia("(prefers-color-scheme: dark)").matches)
// );

// if (
//   localStorage.theme === "dark" ||
//   (!("theme" in localStorage) &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches)
// ) {
//   document.documentElement.classList.add("dark");
// } else {
//   document.documentElement.classList.remove("dark");
// }

// function toggleTheme() {
//   document.documentElement.classList.toggle("dark");

//   if (document.documentElement.classList.contains("dark")) {
//     localStorage.theme = "dark";
//     console.log("Switched to Dark Mode");
//   } else {
//     localStorage.theme = "light";
//     console.log("Switched to Light Mode");
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   // Apply theme on page load
//   if (
//     localStorage.theme === "dark" ||
//     (!("theme" in localStorage) &&
//       window.matchMedia("(prefers-color-scheme: dark)").matches)
//   ) {
//     document.documentElement.classList.add("dark");
//   } else {
//     document.documentElement.classList.remove("dark");
//   }
// });

// // Define toggleTheme globally
// function toggleTheme() {
//   document.documentElement.classList.toggle("dark");

//   if (document.documentElement.classList.contains("dark")) {
//     localStorage.theme = "dark";
//   } else {
//     localStorage.theme = "light";
//   }
// }

function applyTheme() {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

function toggleTheme() {
  console.log("It is clkced");
  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
  applyTheme();
}

// Apply the theme on page load
applyTheme();
