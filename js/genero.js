window.addEventListener("load",function(){

  let queryString = new URLSearchParams(location.search);

  let numeroGenero = queryString.get("idGenero");

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + numeroGenero + "/artists")

.then(function(response) {
    return response.json()
  })

.then(function(information) {
    
    let generos = information.data

      for (let i = 0; i < 9; i++) {
        const element = generos[i];
        
        let nombre = element.name 
        let imagen = element.picture
        
        document.querySelector("#detalle-genero").innerHTML += `<article>
        <a href="Artists.html"><img src="`+ imagen +`" alt="Foto de` + " " + nombre +`">
        <h2 class="nombre-artista">`+ nombre +`</h2>
        </a>
        </article>`

      }




    }
       )


})

