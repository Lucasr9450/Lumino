function irParaPlanos() {
    document.body.classList.remove("fade-in");
    setTimeout(() => window.location.href = "planos.html", 300);
  }
  
  function voltarHome() {
      document.body.classList.remove("fade-in");
      setTimeout(() => window.location.href = "../../home.html", 300);
    };
  
  function irParaPagamento(plano) {
    Swal.fire({
      icon: 'question',
      title: `Plano ${plano}`,
      text: `Deseja continuar para o pagamento do plano ${plano}?`,
      showCancelButton: true,
      confirmButtonColor: '#ff7a00',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Sim, continuar'
    }).then((result) => {
      if (result.isConfirmed) {
        document.body.classList.remove("fade-in");
        setTimeout(() => window.location.href = "pagamento.html", 300);
      }
    });
  }
  
  function voltarPremium() {
    document.body.classList.remove("fade-in");
    setTimeout(() => window.location.href = "premium.html", 300);
  }
  
  function voltarPlanos() {
    document.body.classList.remove("fade-in");
    setTimeout(() => window.location.href = "planos.html", 300);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formPagamento");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
  
        Swal.fire({
          title: "Confirmar pagamento?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#ff7a00",
          cancelButtonColor: "#aaa",
          confirmButtonText: "Sim, pagar",
          cancelButtonText: "Cancelar"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              icon: "success",
              title: "Pagamento concluído!",
              text: "Parabéns, agora você é um membro premium Lumino!",
              confirmButtonColor: "#ff7a00"
            }).then(() => {
              window.location.href = "../../home.html";
            });
          }
        });
      });
    }
  });
  