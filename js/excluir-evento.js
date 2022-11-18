const params = window.location.search
const urlParams = new URLSearchParams(params)
const id = parseFloat(urlParams.get('id'));

let inputNome = document.querySelector("#nome")
let inputBanner= document.querySelector("#banner")
let inputAtracao = document.querySelector("#atracoes") 
let inputDescricao = document.querySelector("#descricao") 
let inputData = document.querySelector("#data") 
let inputLotacao = document.querySelector("#lotacao") 


function pegarEvento(){
    fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${id}`)
   .then(response => response.json)
   .then(result => preencherFormulario(result))
}

function preencherFormulario(event){
   inputNome.value = event.name,
   inputBanner.value = event.poster,
   inputAtracao.value =  event.attractions,
   inputDescricao.value = event.description,
   inputData.value =  event.scheduled,
   inputLotacao.value =  event.number_tickets

}
  
const btnDeletarEvento = document.querySelector("#deletarEvento");

async function deletarEvento() {
     
await fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
  });

}
btnDeletarEvento.onclick = deletarEvento;

