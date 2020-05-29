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
            let imagen = element.cover

            document.querySelector("#fotos-albums").innerHTML += ` <li class="tops">
            <a href="Albums.html"><img src="`+ imagen +`" alt="Foto de`+" " + nombre +` "> </a>    
            </li>`
        }

        
        for (let i = 0; i < 5; i++) {
            const element = artists[i];
         
            let nombre = element.name
            let imagen = element.picture

            document.querySelector("#fotos-artists").innerHTML += ` <li class="tops">
            <a href="Artists.html"><img src="`+ imagen +`" alt="Foto de`+" " + nombre +` "> </a>    
            </li>`
        }

            
        for (let i = 0; i < 5; i++) {
            const element = tracks[i];
        
            let nombre = element.title
            let imagen = element.album.cover

            document.querySelector("#fotos-tracks").innerHTML += ` <li class="tops">
            <a href="Tracks.html"><img src="`+ imagen +`" alt="Foto de cancion`+" " + nombre +` "> </a>    
            </li>`
        }

        
        
    })


})