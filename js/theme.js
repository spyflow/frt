// Función para alternar entre modo claro y oscuro
function toggleTheme() {
  const body = document.body
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode")
    localStorage.setItem("theme", "dark")
    document.getElementById("theme-icon").className = "fas fa-sun"
  } else {
    body.classList.add("light-mode")
    localStorage.setItem("theme", "light")
    document.getElementById("theme-icon").className = "fas fa-moon"
  }
}

// Función para aplicar el tema guardado o el predeterminado
function applyTheme() {
  const savedTheme = localStorage.getItem("theme")

  if (savedTheme === "light") {
    document.body.classList.add("light-mode")
    document.getElementById("theme-icon").className = "fas fa-moon"
  } else {
    document.getElementById("theme-icon").className = "fas fa-sun"
  }
}

// Aplicar el tema cuando se carga la página
document.addEventListener("DOMContentLoaded", applyTheme)

