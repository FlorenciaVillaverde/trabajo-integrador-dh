window.addEventListener("load", function() {

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")

    .then(function(response) {
        return response.json()
      })

    .then(function(information) {
        console.log(information);
    
        let artists = information.artists.data 
        let tracks = information.tracks.data
        let albums = information.albums.data

        for (let i = 0; i < 5; i++) {
            const element = artists[i];
         
            let nombreArtista = element.name
            let imagen = element.picture_xl

            let idArtist = element.id
            
            document.querySelector("#fotos-artists").innerHTML += ` <li class="tops">
            <a href="Artists.html?idArtista=`+ idArtist +`"><img src="`+ imagen +`" alt="Foto de`+ " " + nombreArtista +` ">
            <h2 class="mobile">`+ nombreArtista +`</h2>
            </a> 
            </li>`
        }


        for (let i = 0; i < 5; i++) {
            const element = tracks[i];
        
            let nombreTrack = element.title
            let nombreArtista = element.artist.name
            let imagen = element.album.cover_xl

            let idTrack = element.id

            document.querySelector("#fotos-tracks").innerHTML += ` <li class="tops">
            <a href="Tracks.html?idTrack=`+ idTrack +`"><img src="`+ imagen +`" alt="Foto de cancion`+ " " + nombreTrack +` ">
            <h2 class="mobile">`+ nombreTrack +`</h2>
            <h4 class="mobile1"> Song . `+ nombreArtista +`</h4>
            </a>    
            </li>`
        }
       
        
        for (let i = 0; i < 5; i++) {
            const element = albums[i];
         
            let nombreAlbum = element.title
            let nombreArtista = element.artist.name
            let imagen = element.cover_xl
            
            let idAlbum = element.id
            
            document.querySelector("#fotos-albums").innerHTML += ` <li class="tops">
            <a href="Albums.html?idAlbum=`+ idAlbum +`"><img src="`+ imagen +`" alt="Foto de`+ " " + nombreAlbum +` ">
            <h2 class="mobile">`+ nombreAlbum +`</h2>
            <h4 class="mobile1"> Album . `+ nombreArtista +`</h4>
            </a>    
            </li>`
        }

    //SPINNER 
    document.querySelector(".loader").style.display = "none"            

    document.querySelector("main").style.display = "block"    
        
        
    })

})