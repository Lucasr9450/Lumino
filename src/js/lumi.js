function abrirSimuladorLumi() {
    document.getElementById("lumiChat").style.display = "block";
  }
  
  function responderLumi() {
    const pergunta = document.getElementById("lumiPergunta").value.trim();
    const respostas = document.getElementById("lumiRespostas");
  
    if (!pergunta) return;
  
    let resposta = "Desculpe, ainda estou aprendendo...";
  
    if (pergunta.toLowerCase().includes("curso")) {
      resposta = "Você pode explorar nossos cursos na aba 'Cursos'.";
    } else if (pergunta.toLowerCase().includes("premium")) {
      resposta = "O plano Premium dá acesso a conteúdos exclusivos e suporte personalizado.";
    } else if (pergunta.toLowerCase().includes("ajuda")) {
      resposta = "Claro! Me diga o que você está procurando.";
    } else if (pergunta.toLowerCase().includes("onde")) {
      resposta = "Você pode usar o menu superior para navegar entre Home, Cursos, Novidades e Premium.";
    }
  
    const respostaDiv = document.createElement("div");
    respostaDiv.className = "resposta";
    respostaDiv.textContent = resposta;
    respostas.appendChild(respostaDiv);
  
    document.getElementById("lumiPergunta").value = "";
  }