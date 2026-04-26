const form = document.getElementById("loginForm");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (usuario.value.trim() === "" || senha.value.trim() === "") {
    mensagem.style.color = "#ff5252";
    mensagem.textContent = "Preencha todos os campos!";
    return;
  }

  if (usuario.value === "adm" && senha.value === "123") {
    mensagem.style.color = "#03dac6";
    mensagem.textContent = "Login realizado com sucesso!";
    localStorage.setItem("usuarioAutenticado", usuario.value);

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 800);

    return;
  }

  mensagem.style.color = "#ff5252";
  mensagem.textContent = "Usuário ou senha incorretos.";
});