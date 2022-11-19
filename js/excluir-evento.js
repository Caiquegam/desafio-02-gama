
const nome = document.querySelector("#nome");
const banner = document.querySelector("#banner");
const atracoes = document.querySelector("#atracoes");
const descricao = document.querySelector("#descricao");
const data = document.querySelector("#data");
const lotacao = document.querySelector("#lotacao");
const form = document.querySelector("form");

const id = new URLSearchParams(window.location.search).get("id");

async function listarEvento() {
  const options = {
    method: "GET",
    redirect: "follow",
    headers: { "Content-Type": "application/json" },
  };
  const resposta = await fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${id}`, options);

  const conteudoResposta = await resposta.json();
  nome.value = conteudoResposta.name;
  banner.value = conteudoResposta.poster;
  atracoes.value = conteudoResposta.attractions;
  descricao.value = conteudoResposta.description;
  data.value = conteudoResposta.scheduled.slice(0, 16);
  lotacao.value = conteudoResposta.number_tickets;
}
listarEvento();

form.onsubmit = async (evento) => {
  evento.preventDefault();

  const options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
  };

  const resposta = await fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${id}`, options);
  if (resposta.status == 204) {
    alert("Evento excluido com sucesso!!");
    window.location.href =
      window.location.pathname == "/SoundGarden/excluir-evento.html"
        ? `${window.location.origin}/SoundGarden/admin.html`
        : `${window.location.origin}/admin.html`;
  }
};
