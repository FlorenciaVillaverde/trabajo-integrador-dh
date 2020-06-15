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
        duracion = Math.floor(duracion/60) +  " " + "mins" + " " + duracion%60 + " " + "segs"
        let fotoArtista = track.artist.picture_xl


        let idArtist = track.artist.id

        document.querySelector(".informacion-cancion").innerHTML = 
        `
        <ul>
            <li>`+ estreno +`</li>
            <li>`+ duracion +`</li>
        </ul>
        <a href="Artists.html?idArtista=`+ idArtist +`"><img src="`+ fotoArtista +`" alt="Foto de`+ " " + nombreArtista +`">
        </a>
        `

        //Storage para favear a mi playlist (preguntar a sus si va afuera o dentro del then)
        document.querySelector(".add-playlist").addEventListener("click", function(){
            let ArrayCancionesFavs

            if(localStorage.getItem("cancionesFavs") != null){
                ArrayCancionesFavs = localStorage.getItem("cancionesFavs").split(",")
                ArrayCancionesFavs.push(numeroTrack)
            }else {
                ArrayCancionesFavs = [numeroTrack]
            }

            localStorage.setItem("cancionesFavs", ArrayCancionesFavs);
        
            }
        )







        /*let reproduccion = track.preview

        document.querySelector(".reproduccion").innerHTML = 
        `
        <audio src="`+ reproduccion +`"></audio>
        `*/
    })   


})