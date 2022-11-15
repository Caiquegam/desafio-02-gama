async function getListarEventos() {
  const section = document.querySelector(".full");
  const response = await fetch(
    "https://xp41-soundgarden-api.herokuapp.com/events"
  );

  const listar = await response.json();

  listar.forEach((lista) => {
    const cardEventos = `
    <div class="conjuntoCards">
        <article class="evento card p-5 m-3">
            <h2>${lista.name} - 05/03/2022</h2>
            <h4>${lista.attractions}</h4>
            <p>${lista.description}</p>
            <a href="#" class="btn btn-primary">reservar ingresso</a>
        </article>
    </div>
  `;

    section.innerHTML += cardEventos;
  });
}

if (window.location.pathname.includes("eventos")) {
  getListarEventos();
}

async function cadastrarEvento(event) {
  event.preventDefault();
  
  const nome = document.querySelector("#nome").value;
  const link = document.querySelector("#link").value;
  const atracao = document.querySelector("#atracoes").value.split(",");
  const descricao = document.querySelector("#descricao").value;
  const data = document.querySelector("#data").value;
  const lotacao = document.querySelector("#lotacao").value;

  const dataObjeto = {
    name: nome,
    poster: link,
    attractions: atracao,
    description: descricao,
    scheduled: new Date (data).toISOString(),
    number_tickets: lotacao,
  };

  await fetch("https://xp41-soundgarden-api.herokuapp.com/events", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(dataObjeto),
  });

  limparFormulario("#nome") 
  limparFormulario("#link") 
  limparFormulario("#atracoes") 
  limparFormulario("#descricao") 
  limparFormulario("#data") 
  limparFormulario("#lotacao") 
    
} 

function limparFormulario(id){
    const elemento = document.querySelector(id)

    elemento.value = "";
}
