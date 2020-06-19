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

        //detalle del album(foto, nombre, artista del album)
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

            //canciones del album
            document.querySelector(".tracks").innerHTML += 
            `
            <section>
                <article class="iconos">
                    <a href="Tracks.html?idTrack=`+ idTrack +`"> <i class="fas fa-play"></i> </a>
                </article>
                
                <article>
                    <a href="Tracks.html?idTrack=`+ idTrack +`">`+ tracks +`</a> <h4><a href="Artists.html?idArtista=`+ idArtist +`">`+ nombreArtista +`</a></h4>
                </article>
                
                <article class="iconos">
                    <i class="fas fa-heart botoncito" idCancion=` + idTrack + `></i>
                </article>
            </section>
            `
        }
        
        let estreno = album.release_date
        let duracion = album.duration
        duracion = Math.floor(duracion/60) +  " " + "mins" + " " + duracion%60 + " " + "segs"
        let fotoArtista = album.artist.picture_xl
        let genero = album.genres.data
        
       
        //detalle del album (foto artista, entreno, duracion, genero)
        document.querySelector(".informacion-album").innerHTML =
        `
        <ul>
            <li><a href="Artists.html?idArtista=`+ idArtist +`"><img src="`+ fotoArtista +`" alt="Foto de`+ " " + nombreArtista +`"></a></li>
            
            <div>
                <li>`+ estreno +`</li>
                <li>`+ duracion +`</li>
                <li class="genero"> Género - </li>
            </div>
        </ul>
        `
        
        //for que recorre el array de generos
        for (let i = 0; i < genero.length; i++) {
            const element = genero[i];
            
           let nombreGenero = element.name
           let idGenero = element.id

            document.querySelector(".genero").innerHTML += 
            `
            <a href="Genero.html?idGenero=`+ idGenero +`">`+ nombreGenero + " " + "-" + `</a>
            ` 
        }

        //Storage para favear a mi playlist
        let botoncitos = document.querySelectorAll(".botoncito")
                
        for (let i = 0; i < botoncitos.length; i++) {
            const element = botoncitos[i];

            let idTrack = element.getAttribute("idCancion")
            if(localStorage.getItem("cancionesFavs") != null){
                ArrayCancionesFavs = localStorage.getItem("cancionesFavs").split(",")

                if(ArrayCancionesFavs.includes("" + idTrack)){
                
                    element.style.color = "#E43397"
                }
            }

            element.addEventListener("click", function () {
                
                let ArrayCancionesFavs
                
                if(localStorage.getItem("cancionesFavs") != null){
                    ArrayCancionesFavs = localStorage.getItem("cancionesFavs").split(",")
                    
                    if(ArrayCancionesFavs.includes("" + idTrack)){
                        let posicion = ArrayCancionesFavs.indexOf(idTrack)
                        ArrayCancionesFavs.splice(posicion, 1)
                        this.style.color = "white"
                    }else{
                        ArrayCancionesFavs.push(idTrack)
                        this.style.color = "#E43397"
                        
                    }

                }else{
                    ArrayCancionesFavs = [idTrack]
                }
        
                localStorage.setItem("cancionesFavs", ArrayCancionesFavs);
            })
        }

       

        //SPINNER 
        document.querySelector(".loader").style.display = "none"            

        document.querySelector("main").style.display = "block"   

    })


})    

