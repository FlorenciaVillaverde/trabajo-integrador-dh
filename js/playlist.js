window.addEventListener("load", function() {

    if(localStorage.getItem("cancionesFavs") != null) {

        let ArrayCancionesFavs = localStorage.getItem("cancionesFavs").split(",")

        for (let i = 0; i < ArrayCancionesFavs.length; i++) {

            fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + ArrayCancionesFavs[i])
            
            .then(
                function(respuesta) {
                    return respuesta.json();            
                })

            .then(function(information) {
    
                let track = information
        
                console.log(track);
        
                let nombreCancion = track.title
                let nombreArtista = track.artist.name

                let idTrack = track.id
                let idArtista = track.artist.id
        
                //canciones de la playlist
                document.querySelector(".cancionesFavs").innerHTML += 
                `<li>
                <a href="Tracks.html?idTrack=`+ idTrack +`">`+ nombreCancion +`</a>
                <h4> <a class="artista" href="Artists.html?idArtista=`+ idArtista +`">`+ nombreArtista +`</a></h4> <i class="fas fa-heart botoncito" idCancion=` + idTrack + `></i>
                </li>`
            
                //SPINNER 
                document.querySelector(".loader").style.display = "none"            

                document.querySelector("main").style.display = "block"   
         

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
                        
                        let ArrayCancionesFavs = localStorage.getItem("cancionesFavs").split(",")
                        let posicion = ArrayCancionesFavs.indexOf(idTrack)
                        ArrayCancionesFavs.splice(posicion, 1)
                        this.style.color = "white"

                
                        localStorage.setItem("cancionesFavs", ArrayCancionesFavs);
                    })
                }

            })

        } 

    //si no hay canciones guardadas
    }else{    
        alert("Aún no has agregado canciones a tu playlist")

        document.querySelector(".loader").style.display = "none"            

        document.querySelector("main").style.display = "block"   

        document.querySelector(".cancionesFavs").innerHTML =
            `
            <p>No se han encontrado canciones guardadas</p>
            ` 
        
    }
})