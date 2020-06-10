window.addEventListener("load", function() {
    
    let queryString = new URLSearchParams(location.search);

    let numeroTrack = queryString.get("idTrack");

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + numeroTrack)
    
    .then(function(response) {
        return response.json()
    })

    .then(function(information) {
    
        let track = information

        console.log(track);

        let nombreCancion = track.title
        let nombreArtista = track.artist.name
        let nombreAlbum = track.album.title
        let fotoAlbum = track.album.cover_xl
        
        let idAlbum = track.album.id

        document.querySelector(".titulo").innerHTML = 
        `
        <img id= "foto-cancion" src="`+ fotoAlbum +`" alt="Foto de cancion`+ " " + nombreCancion +`">
        <div>
            <h1>`+ nombreCancion +`</h1>
            <h2>Album <a href="Albums.html?idAlbum=`+ idAlbum +`">`+ nombreAlbum +`</a></h2>
            <button class="add-playlist" type="button">Add <i class="fas fa-plus"></i></button>
        </div>
        `

        let estreno = track.release_date
        let duracion = track.duration
        let fotoArtista = track.artist.picture_xl

        let idArtist = track.artist.id

        document.querySelector(".informacion-cancion").innerHTML = 
        `
        <ul>
            <li>`+ estreno +`</li>
            <li>`+ duracion +`</li>
            <li>Genero - <a href="Genero.html">Latino</a></li>
        </ul>
        <a href="Artists.html?idArtista=`+ idArtist +`"><img src="`+ fotoArtista +`" alt="Foto de`+ " " + nombreArtista +`">
        </a>
        `
        //NO APARECE EL GENERO AL QUE PERTENECE LA CANCION







        /*let reproduccion = track.preview

        document.querySelector(".reproduccion").innerHTML = 
        `
        <audio src="`+ reproduccion +`"></audio>
        `*/
    })   


})