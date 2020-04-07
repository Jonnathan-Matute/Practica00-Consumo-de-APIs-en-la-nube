function buscarPelicuaPorTitulo(){
    var titulo = document.getElementById("titulo").value;
    var detalles = "";
    if (titulo == "") {
        detalles = "<tr>" +
        "<td colspan='5'> Sin información...!</td> " +
        "</tr>";
        document.getElementById("informacion").innerHTML = detalles;
    } else {
        if(window.XMLHttpRequest){
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText)

                data.Search.forEach(movie => {
                    detalles += "<tr>" +
                    "<td><a href='#' onclick=\"buscarPeliculaPorId('" + movie.imdbID + "')\"> Mas de"
                    "<td>" + movie.Title + "</td>" +
                    "<td>" + movie.Year + "</td>" +
                    "<td>" + movie.Type + "</td>" +
                    "<td><img src=" + movie.Poster + "></td>" +
                    "</tr>";
                });
                document.getElementById("informacion").innerHTML = detalles;
            }
        };
        
        xmlhttp.open("GET","http://www.pmdbapi.com/?i=tt3896198&apikey=2f3031c=" + titulo + "&plot=full", true);
        xmlhttp.send();
    }
}