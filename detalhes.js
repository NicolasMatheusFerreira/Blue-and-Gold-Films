URL = 'https://api.themoviedb.org/3'
CHAVE = 'api_key=7da75b339c06b73c6889d998e4ef0dae';
API_URL = URL+'/discover/movie?sort_by=popularity.desc&'+CHAVE;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const detalhes = document.getElementById('detalhesFilme');

getMovies(API_URL);

function getMovies(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {            
            ShowFilmes(data.results[1]);
        });
}

function ShowFilmes(data) {
    data.forEach(movie => {
          const {title, poster_path, vote_average, overview, release_date} = movie;
          const movieEl = document.createElement('div');
          movieEl.classList.add('detalhes');
          movieEl.innerHTML = `
                        <div class="movie-info">
                            <img src="${IMG_URL+poster_path}" alt="${title}" class="card-img-top">
                            <h3 class="card-title">${title}</h3>
                            <h6>Lancamento: ${release_date}</h6>                            
                            <p class="card-text">${overview}</p>
                            <a href="detalhes.html" class="btn btn-dark">Detalhes</a>
                        </div>                                                  
          `
          destaque.appendChild(movieEl);
    });
}