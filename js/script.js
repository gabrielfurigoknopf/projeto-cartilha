//alternar entre light e dark theme
const themeToggleBtn = document.getElementById("theme-toggle");
if (localStorage.getItem("dark-theme") === "true") {
  document.body.classList.add("dark-theme");
  themeToggleBtn.textContent = "☀️";
}

//adiciona evento de clique para alternar entre tema claro e escuro
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("dark-theme", isDark);
  themeToggleBtn.textContent = isDark ? "☀️" : "🌙";
});

//alternar acessibilidade (tamanho da fonte)
const accessibilityToggleBtn = document.getElementById("accessibility-toggle");
if (localStorage.getItem("large-font") === "true") {
  document.body.classList.add("large-font");
}

//adiciona o evento de clique para alternar o tamanho da fonte
accessibilityToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("large-font");
  const isLarge = document.body.classList.contains("large-font");
  localStorage.setItem("large-font", isLarge);
});
