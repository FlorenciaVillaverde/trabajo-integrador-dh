window.addEventListener("load", function() {

    let queryString = new URLSearchParams(location.search);

    let numeroArtista = queryString.get("idArtista");

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + numeroArtista)
    
    .then(function(response) {
        return response.json()
    })

    .then(function(information) {
    
        let artistas = information

        console.log(artistas);
        
        let nombre = information.name
        let imagen = information.picture_xl
        let fans = information.nb_fan
        let topCanciones = information.tracklist
        
        //Detalle del artista (foto, nombre y fans)
        document.querySelector(".position").innerHTML = `<img  id="foto-perfil" src="` + imagen +`" alt="foto de` + " " + nombre +`"></li> 
            <b>` + nombre +`</b>`

        document.querySelector(".detalle").innerHTML = `
            <li><b class="error-desktop">` + nombre+`</b></li>
            <li class="boton">
                <button type="button">
                Follow</button>
            </li>
            <li>` + numberWithCommas(fans) + " " +`fans</li>
            `
        document.querySelector(".top5").innerHTML = `<h2 class="populares"> Top 5 Canciones </h2>`

            //Top 5 canciones
            fetch("https://cors-anywhere.herokuapp.com/" + topCanciones)

            .then(function(response) {
                return response.json()
            })
        
            .then(function(information) {
            console.log(information);
        
                let topCanciones = information.data
                
        
                for (let i = 0; i < 5; i++) {
                    const element = topCanciones[i];
        
                    let nombre = element.title
                    let idTrack = element.id
        
                    document.querySelector(".topCanciones").innerHTML += `<section>
                    
                        <article class="conteo" >` + (i+1) +`
                        <a href="Tracks.html?idTrack=`+ idTrack +`">` + nombre +`</a>
                        </article>
                        
                        <article class="add-playlist">
                            <i class="fas fa-heart botoncito"  idCancion=` + idTrack + `></i>
                        </article>
                        </section>`
                        
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
})

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}