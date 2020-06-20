window.addEventListener("load", function() {
    let queryString = new URLSearchParams(location.search)

    let search = queryString.get("buscador");

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q="+ search)
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )

    .then(function(information) {
        
        let resultados = information.data

        console.log(resultados);
        
        if (resultados == undefined || resultados.length == 0) {
            document.querySelector(".resultados-tracks").innerHTML =
            `
            <p>No se han encontrado canciones</p>
            `
        }

        for (let i = 0; i < 4; i++) {
            const element = resultados[i];

            let nombreTrack = element.title
            let imagen = element.album.cover_xl

            let idTrack = element.id

            // resultado de tracks
            document.querySelector(".resultados-tracks").innerHTML += 
            `<article>
                <a href="Tracks.html?idTrack=`+ idTrack +`"><img src="`+ imagen +`" alt="Foto de la canción` + ` ` + nombreTrack + `">
                <h2 class="nombre-track">`+ nombreTrack +`</h2>
                </a>
            </article> `
            
        }
                

    })


        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q="+ search)
        .then(
            function(respuesta) {
                return respuesta.json();            
            })
    
        .then(function(information) {
            
            let resultados = information.data
    
            console.log(resultados);
        
            if (resultados == undefined || resultados.length == 0) {
                document.querySelector(".resultados-artists").innerHTML =
                `
                <p>No se han encontrado artistas</p>
                ` 
            }

            for (let i = 0; i < 4; i++) {
                const element = resultados[i];

                let nombreArtista = element.name
                let imagen = element.picture_xl

                let idArtista = element.id

                // resultado de artistas
                document.querySelector(".resultados-artists").innerHTML += 
                `<article>
                    <a href="Artists.html?idArtista=`+ idArtista +`"><img src="`+ imagen +`" alt="Foto de` + ` ` + nombreArtista + `">
                    <h2 class="nombre-track">`+ nombreArtista +`</h2>
                    </a>
                </article> `
            }

        })
    

        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q="+ search)
        .then(
            function(respuesta) {
                return respuesta.json();            
            })
    
        .then(function(information) {
            
            let resultados = information.data
    
            console.log(resultados);
        
            if (resultados == undefined || resultados.length == 0) {
                document.querySelector(".resultados-albums").innerHTML =
                `
                <p>No se han encontrado albums</p>
                ` 
            }

            for (let i = 0; i < 4; i++) {
                const element = resultados[i];

                let nombreAlbum = element.title
                let imagen = element.cover_xl

                let idAlbum = element.id

                // resultado de albums
                document.querySelector(".resultados-albums").innerHTML += 
                `<article>
                    <a href="Albums.html?idAlbum=`+ idAlbum +`"><img src="`+ imagen +`" alt="Foto del album` + ` ` + nombreAlbum + `">
                    <h2 class="nombre-track">`+ nombreAlbum +`</h2>
                    </a>
                </article> `
            }
        })

       //SPINNER
        document.querySelector(".loader").style.display = "none"            

        document.querySelector("main").style.display = "block"   

})