console.log("This site was generated by Hugo.");
function applyTheme() {
  const isDark =
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  document.documentElement.className = isDark ? "dark" : "light";

  const checkbox = document.getElementById("darkmode-toggle");
  checkbox.checked = isDark;
}

window.toggleTheme = function toggleTheme() {
  const checkbox = document.getElementById("darkmode-toggle");
  if (!checkbox.checked) {
    localStorage.theme = "light";
    document.documentElement.className = "light";
  } else {
    localStorage.theme = "dark";
    document.documentElement.className = "dark";
  }
};
document.addEventListener("DOMContentLoaded", applyTheme);
