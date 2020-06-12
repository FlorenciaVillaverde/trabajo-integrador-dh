window.addEventListener("load", function() {
document.querySelector(".header").innerHTML = `
        <nav class="contenedor"> 
            <nav class="menu" >
                <a href="#offcanvas-usage" uk-toggle>
                    <i class="fas fa-grip-lines"></i>
                </a>

                <div id="offcanvas-usage" uk-offcanvas>
                    <div class="uk-offcanvas-bar">
            
                        <button class="uk-offcanvas-close" type="button" uk-close></button>
            
                        <ul>
                            <li>
                                <a href="home.html">HOME</a>
                            </li>

                            <li>
                                <a href="playlist.html"> PLAYLISTS</a>
                            </li>

                            <li>
                                <a href="Generos.html">GENEROS</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <nav class="logo">
             BEAMER 
            </nav>

            <nav class="titulos">
                <a href="home.html">HOME</a>
                <a href="playlist.html"> PLAYLISTS</a>
                <a href="Generos.html">GENEROS</a>
            </nav>

            <nav class="lupita">
                <div>
                    <a uk-search-icon href="#"></a>
                    <div class="uk-drop" uk-drop="mode: click; pos: left-center; offset: 0">
                        <form class="uk-search uk-search-navbar uk-width-1-1" action="resultados.html" method="GET">
                            <input class="uk-search-input" type="search" name="buscador" placeholder="Search..." autofocus>
                        </form>
                    </div>
                </div>
            </nav>
        </nav>
`
})