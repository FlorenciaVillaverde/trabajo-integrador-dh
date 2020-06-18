window.addEventListener("load", function() {

     if(localStorage.getItem("cancionesFavs") != null) {

        let ArrayCancionesFavs = localStorage.getItem("cancionesFavs").split(",")

        for (let i = 0; i < ArrayCancionesFavs.length; i++) {

            fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + ArrayCancionesFavs[i])
            
            .then(
                function(respuesta) {
                    return respuesta.json();            
                }
            )

            .then(function(information) {
    
                let track = information
        
                console.log(track);
        
                let nombreCancion = track.title
                let nombreArtista = track.artist.name

                let idTrack = track.id
                let idArtista = track.artist.id
        
                document.querySelector(".cancionesFavs").innerHTML += 
                `<li>
                <a href="Tracks.html?idTrack=`+ idTrack +`">`+ nombreCancion +`</a></h4>
                <h4> <a class="artista" href="Artists.html?idArtista=`+ idArtista +`">`+ nombreArtista +`</a></h4>
                </li>`
            
                //SPINNER 
         document.querySelector(".loader").style.display = "none"            

         document.querySelector("main").style.display = "block"   
         
            })

        }

         

        } else {    
            alert("Ey! No hay favs!")// mas estetico
        }
        
  
})