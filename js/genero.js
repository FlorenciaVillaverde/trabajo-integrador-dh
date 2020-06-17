window.addEventListener("load",function(){

  let queryString = new URLSearchParams(location.search);

  let numeroGenero = queryString.get("idGenero");
  let nombreGenero = queryString.get("nombre");
 

  document.querySelector(".titulo-desktop").innerHTML =
  `
  <h1>`+ nombreGenero +`</h1>
  `
  

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + numeroGenero + "/artists")

.then(function(response) {
    return response.json()
  })

.then(function(information) {
    
    let generos = information.data

      for (let i = 0; i < 9; i++) {
        const element = generos[i];
        
        let nombre = element.name 
        let imagen = element.picture_xl

        let idArtista = element.id
        
        document.querySelector("#detalle-genero").innerHTML += `<article>
        <a href="Artists.html?idArtista=`+ idArtista +`"><img src="`+ imagen +`" alt="Foto de` + " " + nombre +`">
        <h2 class="nombre-artista">`+ nombre +`</h2>
        </a>
        </article>`

      }


      //SPINNER 
      document.querySelector(".loader").style.display = "none"            

      document.querySelector("main").style.display = "block"   

    })

  

})

