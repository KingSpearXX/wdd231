const yearSpan = document.getElementById("currentYear");
yearSpan.textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified;

function toggleMenu() {
  const menu = document.querySelector("nav ul");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}


