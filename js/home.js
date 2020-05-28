window.addEventListener("load", function() {

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")

    .then(function(response) {
        return response.json()
      })

    .then(function(information) {
        console.log(information);
    
        let album = information.albums.data

        console.log(album);

        for (let i = 0; i < 5; i++) {
            const element = album[i];
         
            let nombre = element.title

            console.log(nombre);
            /* hay que buscar la imagen del album y cambiarla en el html. 
            Despues copipastear para tracks y artists */
        }
        
        
        
    })

})