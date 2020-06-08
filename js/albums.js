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

        let nombreAlbum = album.title
        let nombreArtista = album.artist.name
        let fotoAlbum = album.cover_xl
        let id = album.artist.id
        document.querySelector(".album").innerHTML = 
        `
        <div>
            <img id="foto-album" src="`+ fotoAlbum +`" alt="Foto del album` + " " + nombreArtista +`">
        </div>
        <div> 
            <h1 class="nombreAlbum"> `+ nombreAlbum +` </h1>
            <h2>Album de <a href="Artists.html?idArtista=`+ id +`"> `+ nombreArtista +`</a></h2>
        </div>
        `
        let canciones = album.tracks.data
        console.log(canciones);
        
        for (let i = 0; i < 16; i++) {
            const element = canciones[i];

            let tracks = element.title

            document.querySelector(".tracks").innerHTML += 
            `
            <section>
            <article class="iconos">
                <i class="fas fa-play"></i>
            </article>
            
            <article>
                <a href="Tracks.html">`+ tracks +`</a><h4> <a href="Artists.html">`+ nombreArtista +`</a></h4>
            </article>
            
            <article class="iconos">
                <i class="fas fa-plus"></i>
            </article>
        </section>
            `
            
        }

    })


})    