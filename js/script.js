//alternar entre light e dark Theme
const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeToggleBtn.textContent = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
});

//alternar acessibilidade (tamanho da fonte)
const accessibilityToggleBtn = document.getElementById("accessibility-toggle");
accessibilityToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("large-font");
});
