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
              <h2>${lista.name} - ${lista.scheduled}</h2>
              <h4>${lista.attractions}</h4>
              <p>${lista.description}</p>
              <a href="#" class="btn btn-primary">Reservar Ingresso</a>
          </article>
      </div>
    `;
  
      section.innerHTML += cardEventos;
    });
  }
  
  if (window.location.pathname.includes("eventos")) {
    getListarEventos();
  }