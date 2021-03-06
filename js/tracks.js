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
        let idTrack = track.id

        //Detalle de la cancion(foto, nombre y album que pertenece)
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

        //detalle de la cancion(artista(foto), fecha estreno, duracion)
        document.querySelector(".informacion-cancion").innerHTML = 
        `<a href="Artists.html?idArtista=`+ idArtist +`"><img src="`+ fotoArtista +`" alt="Foto de`+ " " + nombreArtista +`">
        </a>
        <ul>
            <li><a href="Artists.html?idArtista=`+ idArtist +`">`+ nombreArtista +` </a></li>
            <li>`+ estreno +`</li>
            <li>`+ duracion +`</li>
        </ul>
        `

        //cancion reproducible de deezer
        document.querySelector(".reproCancion").innerHTML = 
        `<iframe scrolling="no" frameborder="0" allowTransparency="true" 
        src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=900&height=350&color=800080&layout=dark&size=medium&type=tracks&id=`+ idTrack +`&app_id=1" 
        width="100%" height="90"></iframe>`

        //Storage para favear a mi playlist 
        document.querySelector(".add-playlist").addEventListener("click", function(){
            let ArrayCancionesFavs

            if(localStorage.getItem("cancionesFavs") != null){
                ArrayCancionesFavs = localStorage.getItem("cancionesFavs").split(",")
                ArrayCancionesFavs.push(numeroTrack)
            }else{
                ArrayCancionesFavs = [numeroTrack]
            }

            localStorage.setItem("cancionesFavs", ArrayCancionesFavs);
        
            })

        
        //SPINNER 
        document.querySelector(".loader").style.display = "none"            

        document.querySelector("main").style.display = "block"   
    })   
})