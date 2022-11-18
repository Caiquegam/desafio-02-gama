async function getListaAdmin(){
  const section = document.querySelector(".sectionAdmin");
  const resp = await fetch(
    "https://xp41-soundgarden-api.herokuapp.com/events"
  )
 
  const lista = await resp.json();
  
  lista.forEach((list) => {
    const listEvent = `
    <div class="bd-example">
      <table class="table">
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>${list.scheduled}</td>
                <td>${list.name}</td>
                <td>${list.attractions}</td>
                <td class = "btn">
                    <a href="reservas.html" type = "button" class="btn btn-dark">ver reservas</a>
                    <a href="editar-evento.html?id=${list._id}"  type = "button" class="btn btn-secondary">editar</a>
                    <a href="excluir-evento.html?id=${list._id}" id = "buttonDelete"  type = "button" class="btn btn-danger">excluir</a>
                </td>
              </tr>
            <tr>
        </tbody>
      </table>
    </div>`;
   
     section.innerHTML += listEvent;
        
  });
}
if (window.location.pathname.includes("admin")) {
  getListaAdmin();
  
}
 
