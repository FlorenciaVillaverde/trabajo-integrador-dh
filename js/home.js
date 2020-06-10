window.addEventListener("load", function() {

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")

    .then(function(response) {
        return response.json()
      })

    .then(function(information) {
        console.log(information);
    
        let albums = information.albums.data
        let artists = information.artists.data 
        let tracks = information.tracks.data


        for (let i = 0; i < 5; i++) {
            const element = albums[i];
         
            let nombre = element.title
            let imagen = element.cover_xl

            let idAlbum = element.id
            
            document.querySelector("#fotos-albums").innerHTML += ` <li class="tops">
            <a href="Albums.html?idAlbum=`+ idAlbum +`"><img src="`+ imagen +`" alt="Foto de`+ " " + nombre +` "> </a>    
            </li>`
        }

        
        for (let i = 0; i < 5; i++) {
            const element = artists[i];
         
            let nombre = element.name
            let imagen = element.picture_xl

            let idArtist = element.id
            
            document.querySelector("#fotos-artists").innerHTML += ` <li class="tops">
            <a href="Artists.html?idArtista=`+ idArtist +`"><img src="`+ imagen +`" alt="Foto de`+ " " + nombre +` "> </a>    
            </li>`
        }

            
        for (let i = 0; i < 5; i++) {
            const element = tracks[i];
        
            let nombre = element.title
            let imagen = element.album.cover_xl

            let idTrack = element.id

            document.querySelector("#fotos-tracks").innerHTML += ` <li class="tops">
            <a href="Tracks.html?idTrack=`+ idTrack +`"><img src="`+ imagen +`" alt="Foto de cancion`+ " " + nombre +` "> </a>    
            </li>`
        }

        
        
    })


})