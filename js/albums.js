window.addEventListener("load", function() {

    let queryString = new URLSearchParams(location.search);

    let numeroAlbum = queryString.get("idAlbum");

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + numeroAlbum)

    .then(function(response) {
        return response.json()
      })

    .then(function(information) {
        console.log(information);

        let album = information

        let nombreArtista = album.artist.name
        let nombreAlbum = album.title
        let fotoAlbum = album.cover_xl

        let idArtist = album.artist.id

        document.querySelector(".album").innerHTML = 
        `
        <div>
            <img id="foto-album" src="`+ fotoAlbum +`" alt="Foto del album` + " " + nombreAlbum +`">
        </div>
        <div> 
            <h1 class="nombreAlbum"> `+ nombreAlbum +` </h1>
            <h2>Album de <a href="Artists.html?idArtista=`+ idArtist +`"> `+ nombreArtista +`</a></h2>
        </div>
        `
        let canciones = album.tracks.data
        
        for (let i = 0; i < canciones.length; i++) {
            const element = canciones[i];

            let tracks = element.title
            let idTrack = element.id

            document.querySelector(".tracks").innerHTML += 
            `
            <section>
                <article class="iconos">
                    <i class="fas fa-play"></i>
                </article>
                
                <article>
                    <a href="Tracks.html?idTrack=`+ idTrack +`">`+ tracks +`</a> <h4><a href="Artists.html?idArtista=`+ idArtist +`">`+ nombreArtista +`</a></h4>
                </article>
                
                <article class="iconos">
                    <i class="fas fa-plus"></i>
                </article>
            </section>
            `
            
        }

        let estreno = album.release_date
        let duracion = album.duration
        duracion = Math.floor(duracion/60) +  " " + "mins" + " " + duracion%60 + " " + "segs"
        let fotoArtista = album.artist.picture_xl
        let genero = album.genres.data["1"] //PREGUNTAR A SUS
        let idGenero = album.genre_id
       

        document.querySelector(".informacion-album").innerHTML =
        `
        <ul>
            <li><a href="Artists.html?idArtista=`+ idArtist +`"><img src="`+ fotoArtista +`" alt="Foto de`+ " " + nombreArtista +`"></a></li>
            
            <div>
                <li>`+ estreno +`</li>
                <li>`+ duracion +`</li>
                <li>Genero - <a href="Genero.html?idGenero=`+ idGenero +`">`+ genero +`</a></li>
            </div>
        </ul>
        `
    })


})    