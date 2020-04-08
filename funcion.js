$(document).ready(() => {
    $('#buscador').on('submit', (e) => {
        var buscarPorTitulo = $('#buscarPorTitulo').val();
        porTitulo(buscarPorTitulo);
        e.preventDefault();
    });
});

function porTitulo(buscarPorTitulo) {
    axios.get('https://www.omdbapi.com?s=' + buscarPorTitulo + "&apikey=2f3031c")
        .then((respuesta) => {
            console.log(respuesta);
            var peliculas = respuesta.data.Search;
            var output = '';
            $.each(peliculas, (index, movie) => {
                output += `
                <table>
                    <tr>
                        <th><strong>Póster:</strong><br><img src="${movie.Poster}" width="100" height="100"><br></th>
                        <th><br><strong>Titulo:</strong><br>${movie.Title}</th>
                        <th><br><strong>Publicación:</strong><br> ${movie.Released}</th>
                        <th><br><strong>Género:</strong> <br>${movie.Genre}</th>
                        <th><br><strong>Código:</strong> <br>${movie.imdbID}</th>
                        <th><br><br><a class="button" onclick="porId('${movie.imdbID}')" href="#">Más información</a></th>                       
                    </tr>     
                </table>
                `;
            });
            $('#peliculas').html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}
