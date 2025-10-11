document.addEventListener("DOMContentLoaded", () => {
    const btnCadastrar = document.querySelector(".btn-cadastrar");
    const linkEntrar = document.querySelector(".login-text a");
  
    if (btnCadastrar) {
      btnCadastrar.addEventListener("click", (e) => {
        e.preventDefault();
        abrirModalCadastro();
      });
    }
  
    if (linkEntrar) {
      linkEntrar.addEventListener("click", (e) => {
        e.preventDefault();
        abrirModalLogin();
      });
    }
  
    function abrirModalLogin() {
      Swal.fire({
        title: "Entrar",
        html: `
          <label for="email-login" class="swal2-label">Email:</label>
          <input id="email-login" class="swal2-input" type="email" placeholder="email@exemplo.com">
          <label for="senha-login" class="swal2-label">Senha:</label>
          <input id="senha-login" class="swal2-input" type="password" placeholder="Digite sua senha">
          <a href="#" style="display:block;margin-top:10px;font-size:0.9em;color:#0071eb;text-decoration:none;">Esqueceu a senha?</a>
        `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: "Entrar",
        cancelButtonText: "Cancelar",
        preConfirm: () => {
          const email = document.getElementById("email-login").value.trim();
          const senha = document.getElementById("senha-login").value.trim();
  
          if (!email || !senha) {
            Swal.showValidationMessage("Por favor, preencha ambos os campos.");
            return false;
          }
  
          return { email, senha };
        }
      }).then((result) => {
        if (result.isConfirmed) {
          const { email, senha } = result.value;
  
          if (email === "admin@email.com" && senha === "123456") {
            Swal.fire({
              icon: "success",
              title: "Login bem-sucedido!",
              text: `Bem-vindo(a), ${email}!`,
              confirmButtonText: "Continuar"
            }).then(() => {
              window.location.href = "home.html";
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Erro de Login",
              text: "Email ou senha incorretos. Tente novamente.",
              confirmButtonText: "OK"
            });
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            icon: "info",
            title: "Cancelado",
            text: "Você cancelou o login."
          });
        }
      });
    }
  
    function abrirModalCadastro() {
      Swal.fire({
        title: "Cadastrar-se",
        html: `
          <label for="nome" class="swal2-label">Nome:</label>
          <input id="nome" class="swal2-input" type="text" placeholder="Seu nome completo">
          <label for="email-cad" class="swal2-label">Email:</label>
          <input id="email-cad" class="swal2-input" type="email" placeholder="email@exemplo.com">
          <label for="senha-cad" class="swal2-label">Senha:</label>
          <input id="senha-cad" class="swal2-input" type="password" placeholder="Crie uma senha">
        `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: "Cadastrar",
        cancelButtonText: "Cancelar",
        preConfirm: () => {
          const nome = document.getElementById("nome").value.trim();
          const email = document.getElementById("email-cad").value.trim();
          const senha = document.getElementById("senha-cad").value.trim();
  
          if (!nome || !email || !senha) {
            Swal.showValidationMessage("Por favor, preencha todos os campos.");
            return false;
          }
  
          return { nome, email, senha };
        }
      }).then((result) => {
        if (result.isConfirmed) {
          const { nome, email } = result.value;
  
          Swal.fire({
            icon: "success",
            title: "Cadastro concluído!",
            text: `Bem-vindo(a), ${nome}! Seu email é ${email}.`,
            confirmButtonText: "Continuar"
          }).then(() => {
            window.location.href = "home.html";
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            icon: "info",
            title: "Cancelado",
            text: "Você cancelou o cadastro."
          });
        }
      });
    }
  });