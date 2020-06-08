window.addEventListener("load", function() {

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")

    .then(function(response) {
        return response.json()
      })

    .then(function(information) {
        console.log(information);

        let generos = information.data

        

        for (let i = 1; i < 11; i++) {
            const element = generos[i];
         
            let nombre = element.name
            let imagen = element.picture_xl
            let id = element.id
            document.querySelector("#fotos-generos").innerHTML += ` <article>
            <a href="Genero.html?idGenero=`+ id +`"><img src="`+ imagen +`" alt="Foto de Genero` + ` ` + nombre + `">
            <h2 class="nombre-genero">`+ nombre +`</h2>
            </a>
             </article> `

            
        }
    })



})
