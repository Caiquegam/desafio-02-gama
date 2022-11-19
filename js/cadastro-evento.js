const form = document.querySelector("form");
const nome = document.querySelector("#nome");
const link = document.querySelector("#link");
const atracao = document.querySelector("#atracao");
const descricao = document.querySelector("#descricao");
const data = document.querySelector("#data");
const lotacao = document.querySelector("#lotacao");

form.onsubmit = async (evento) => {
  evento.preventDefault();

    const novoEvento = {
      name: nome.value,
      poster: link.value,
      attractions: atracao.value.split(","),
      description: descricao.value,
      scheduled: data.value.slice(0, 16),
      number_tickets: lotacao.value,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(novoEvento),
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
    };

    const resposta = await fetch("https://xp41-soundgarden-api.herokuapp.com/events", options);
    const conteudoResposta = await resposta.json();
    console.log(conteudoResposta);
	


    if (resposta.status == 201) {
    alert("Evento cadastrado com sucesso!");
    window.location.href = "admin.html";

    nome.value = "";
    link.value = "";
    atracao.value = "";
    descricao.value = "";
    data.value = "";
    lotacao.value = "";
  }
  }

  