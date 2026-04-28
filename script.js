// VALIDAÇÃO
function validarFormulario() {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let mensagem = document.getElementById("mensagem").value;

  if (nome === "" || email === "" || mensagem === "") {
    alert("Preencha todos os campos!");
    return false;
  }

  alert("Mensagem enviada!");
  return true;
}

// DARK MODE
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// SCROLL SUAVE
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    let destino = document.querySelector(this.getAttribute("href"));

    destino.scrollIntoView({
      behavior: "smooth"
    });
  });
});
