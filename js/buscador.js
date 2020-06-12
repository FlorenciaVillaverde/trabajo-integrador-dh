window.addEventListener("load", function() {
    let queryString = new URLSearchParams(location.search)

    let search = queryString.get("buscador");
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=" + search)
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )

    .then(function(information) {
        
        let resultados = information.data

        console.log(resultados);
          
            if (resultados == undefined || resultados.length == 0) {
                alert("No hay resultados"); 
            }

            for (let i = 0; i < resultados.length; i++) {
                const element = resultados[i];

                let nombreTrack = element.title
                let imagenAlbum = element.album.cover_xl
                let idTrack = element.id

                // hacer html y css como en genero con borde blanco y linkear el idCancion

                document.querySelector(".resultados").innerHTML += 
                `<article>
                    <a href="Tracks.html?idTrack=`+ idTrack +`"><img src="`+ imagenAlbum +`" alt="Foto de la canción` + ` ` + nombreTrack + `">
                    <h2 class="nombre-track">`+ nombreTrack +`</h2>
                    </a>
                </article> `
                
            }
                





        }
    )
})