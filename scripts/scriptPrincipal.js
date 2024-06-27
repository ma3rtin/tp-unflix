//Empezamos creando el array con todas nuestras series y peliculas
let contenidos = [
  {
    Nombre: "midsommar",
    Formato: "pelicula",
    Categoria: "terror",
    Detalle: "detalle_midsommar.html",
    Poster: "../assets/images/posters/459564-midsommar-0-1000-0-1500-crop.jpg",
  },
  {
    Nombre: "avatar 1",
    Formato: "pelicula",
    Categoria: "ciencia ficcion",
    Detalle: "detalle_avatar1.html",
    Poster: "../assets/images/posters/avatar.jpg",
  },
  {
    Nombre: "2001",
    Formato: "pelicula",
    Categoria: "ciencia ficcion",
    Detalle: "detalle_2001.html",
    Poster: "../assets/images/posters/2001.jpg",
  },
  {
    Nombre: "peaky blinders",
    Formato: "serie",
    Categoria: "drama",
    Detalle: "detalle_peaky.html",
    Poster: "../assets/images/posters/poster-peaky.jpg",
  },
  {
    Nombre: "eterno resplandor",
    Formato: "pelicula",
    Categoria: "romance",
    Detalle: "detalle_eterno.html",
    Poster: "../assets/images/posters/eternoResplandor.jpg",
  },
  {
    Nombre: "breaking bad",
    Formato: "serie",
    Categoria: "drama",
    Detalle: "detalle_breakingbad.html",
    Poster: "../assets/images/posters/poster-breakingbad.jpg",
  },
  {
    Nombre: "oppenheimer",
    Formato: "pelicula",
    Categoria: "drama",
    Detalle: "detalle_oppenheimer.html",
    Poster: "../assets/images/posters/poster-oppenheimer.jpg",
  },
  {
    Nombre: "hereditary",
    Formato: "pelicula",
    Categoria: "terror",
    Detalle: "detalle_hereditary.html",
    Poster: "../assets/images/posters/hereditary.jpg",
  },
  {
    Nombre: "los juegos del hambre",
    Formato: "pelicula",
    Categoria: "ciencia ficcion",
    Detalle: "detalle_losjuegos.html",
    Poster: "../assets/images/posters/hungerGames.jpg",
  },
  {
    Nombre: "korra",
    Formato: "serie",
    Categoria: "comedia",
    Detalle: "detalle_korra.html",
    Poster: "../assets/images/posters/poster-korra.jpg",
  },
  {
    Nombre: "the office",
    Formato: "serie",
    Categoria: "comedia",
    Detalle: "detalle_theoffice.html",
    Poster: "../assets/images/posters/theOffice.jpg",
  },
  {
    Nombre: "sharp objects",
    Formato: "serie",
    Categoria: "drama",
    Detalle: "detalle_sharp.html",
    Poster: "../assets/images/posters/sharpObjects.jpg",
  },
  {
    Nombre: "la favorita",
    Formato: "pelicula",
    Categoria: "romance",
    Detalle: "detalle_favourite.html",
    Poster: "../assets/images/posters/laFavorita.jpg",
  },
  {
    Nombre: "juno",
    Formato: "pelicula",
    Categoria: "comedia",
    Detalle: "detalle_juno.html",
    Poster: "../assets/images/posters/juno.jpg",
  },
  {
    Nombre: "avatar 2",
    Formato: "pelicula",
    Categoria: "ciencia ficcion",
    Detalle: "detalle_avatar2.html",
    Poster: "../assets/images/posters/poster-avatar2.jpeg",
  },
  {
    Nombre: "the walking dead",
    Formato: "serie",
    Categoria: "drama",
    Detalle: "detalle_twd.html",
    Poster: "../assets/images/posters/poster-twd.jpg",
  },
  {
    Nombre: "requiem",
    Formato: "pelicula",
    Categoria: "drama",
    Detalle: "detalle_requiem.html",
    Poster: "../assets/images/posters/requiem.jpg",
  },
  {
    Nombre: "wakanda",
    Formato: "pelicula",
    Categoria: "ciencia ficcion",
    Detalle: "detalle_wakanda.html",
    Poster: "../assets/images/posters/poster-wakanda.jpeg",
  },
  {
    Nombre: "el ultimo maestro del aire",
    Formato: "serie",
    Categoria: "ciencia ficcion",
    Detalle: "detalle_aang.html",
    Poster: "../assets/images/posters/poster-avatar-aang.jpg",
  },
  {
    Nombre: "avengers",
    Formato: "pelicula",
    Categoria: "ciencia ficcion",
    Detalle: "detalle_avengers.html",
    Poster: "../assets/images/posters/poster-avengers.jpg",
  },
  {
    Nombre: "quantumania",
    Formato: "pelicula",
    Categoria: "ciencia ficcion",
    Detalle: "detalle_quantumania.html",
    Poster: "../assets/images/posters/poster-quantumania.jpg",
  },
  {
    Nombre: "avatar la leyenda de aang",
    Formato: "serie",
    Categoria: "comedia",
    Detalle: "detalle_laleyendadeaang.html",
    Poster: "../assets/images/posters/poster-avatar-aang-dibujo.jpg",
  },
  {
    Nombre: "moonlight",
    Formato: "pelicula",
    Categoria: "romance",
    Detalle: "detalle_moonlight.html",
    Poster: "../assets/images/posters/poster-moonlight.jpg",
  },
  {
    Nombre: "prisioners",
    Formato: "pelicula",
    Categoria: "drama",
    Detalle: "detalle_lasospecha.htm",
    Poster: "../assets/images/posters/poster-prisioners.jpg",
  },
  {
    Nombre: "pequeña miss sunshine",
    Formato: "pelicula",
    Categoria: "comedia",
    Detalle: "detalle_pequeña.html",
    Poster: "../assets/images/posters/poster-lms.jpg",
  },
];

// Creamos una variable donde metemos nuestro divisor de contenido
let grillaContenido = document.querySelector("#grilla");

// Con esto vamos agregando dentro de nuestro documento HTML la estructura que teníamos para cada serie y película pero iterando en nuestro array de contenidos
contenidos.forEach((item) => {
  grillaContenido.innerHTML += `
        <div class="seccion">
            <a class="link" href="${item.Detalle}">
                <img class="poster" src="${item.Poster}" alt=""/>
            </a>
        </div>`;
});

function aplicarFiltro(formato, categoria) {
  //Sacamos todo el contenido de nuestro div grilla
  grillaContenido.innerHTML = "";

  //Declaramos nuestra array de contenido filtrado
  let contenidosFiltrados;

  //Si la categoria ingresada por parametro es distina de null lleva a cabo el filtrado de formato y categoria sino solo filtra por formato
  if (categoria) {
    contenidosFiltrados = contenidos.filter(
      (item) =>
        item.Formato.toLowerCase() == formato.toLowerCase() &&
        item.Categoria.toLowerCase() == categoria.toLowerCase()
    );
  } else {
    contenidosFiltrados = contenidos.filter(
      (item) => item.Formato.toLowerCase() == formato.toLowerCase()
    );
  }

  //finalmente mostramos el contenido filtrado
  contenidosFiltrados.forEach((item) => {
    grillaContenido.innerHTML += `
          <div class="seccion">
              <a class="link" href="${item.Detalle}">
                  <img class="poster" src="${item.Poster}" alt=""/>
              </a>
          </div>`;
  });
}

function buscar(){
  grillaContenido.innerHTML = "";

  let busqueda = document.querySelector("#buscar").value.toLowerCase().trim();

  if(busqueda.length != 0){
    let contenidoFiltrado = contenidos.filter(contenido => contenido.Nombre.indexOf(busqueda) > -1)

    contenidoFiltrado.forEach((item) => {
      grillaContenido.innerHTML += `
            <div class="seccion">
                <a class="link" href="${item.Detalle}">
                    <img class="poster" src="${item.Poster}" alt=""/>
                </a>
            </div>`;
    });
  }
  else{
    contenidos.forEach((item) => {
      grillaContenido.innerHTML += `
            <div class="seccion">
                <a class="link" href="${item.Detalle}">
                    <img class="poster" src="${item.Poster}" alt=""/>
                </a>
            </div>`;
    });
  }
}