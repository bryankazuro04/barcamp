const menuNav = document.querySelector(".menu");
const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: light");

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "light") {
  document.body.classList.toggle("light-theme");
} else if (currentTheme === "dark") {
  document.body.classList.toggle("dark-theme");
}

btn.addEventListener("click", () => {
  menuNav.classList.toggle("light");
  const theme = document.body;

  if (prefersDarkScheme.matches) {
    theme.classList.toggle("dark-theme");
    theme.classList.contains("dark-theme") ? "dark" : "light";
  } else {
    document.body.classList.toggle("light-theme");
    theme.classList.contains("light-theme") ? "light" : "dark";
  }
  localStorage.setItem("theme", theme);
});
