//Carrusel
let contenidos = [
  {
    Nombre: "midsommar",
    Formato: "pelicula",
    Categoria: "terror",
    Detalle: "detalle_midsommar.html",
    Poster: "../assets/images/banners/banner-midsommar.jpg"
  },
  {
    Nombre: "avatar 1",
    Formato: "pelicula",
    Categoria: "ciencia ficcion",
    Detalle: "detalle_avatar1.html",
    Poster: "../assets/images/banners/banner-avatar.png",
  },
  {
    Nombre: "peaky blinders",
    Formato: "serie",
    Categoria: "drama",
    Detalle: "detalle_peaky.html",
    Poster: "../assets/images/banners/banner-peaky-blinders.jpeg",
  },
  {
    Nombre: "breaking bad",
    Formato: "serie",
    Categoria: "drama",
    Detalle: "detalle_breakingbad.html",
    Poster: "../assets/images/banners/banner-breaking.jpg",
  },
  {
    Nombre: "oppenheimer",
    Formato: "pelicula",
    Categoria: "drama",
    Detalle: "detalle_oppenheimer.html",
    Poster: "../assets/images/banners/banner-oppenheimer.jpg",
  },
  {
    Nombre: "korra",
    Formato: "serie",
    Categoria: "comedia",
    Detalle: "detalle_korra.html",
    Poster: "../assets/images/banners/banner-korra.jpg",
  },
  {
    Nombre: "avatar 2",
    Formato: "pelicula",
    Categoria: "ciencia ficcion",
    Detalle: "detalle_avatar2.html",
    Poster: "../assets/images/banners/banner-avatar2.jpg",
  },
  {
    Nombre: "the walking dead",
    Formato: "serie",
    Categoria: "drama",
    Detalle: "detalle_twd.html",
    Poster: "../assets/images/banners/banner-twd.jpg",
  },
  {
    Nombre: "wakanda",
    Formato: "pelicula",
    Categoria: "ciencia ficcion",
    Detalle: "detalle_wakanda.html",
    Poster: "../assets/images/banners/banner-wakanda.png",
  },
  {
    Nombre: "avengers",
    Formato: "pelicula",
    Categoria: "ciencia ficcion",
    Detalle: "detalle_avengers.html",
    Poster: "../assets/images/banners/banner-avengers.png",
  },
  {
    Nombre: "quantumania",
    Formato: "pelicula",
    Categoria: "ciencia ficcion",
    Detalle: "detalle_quantumania.html",
    Poster: "../assets/images/banners/banner-quantumania.jpg",
  },
  {
    Nombre: "avatar la leyenda de aang",
    Formato: "serie",
    Categoria: "comedia",
    Detalle: "detalle_laleyendadeaang.html",
    Poster: "../assets/images/banners/banner-avatar-aang.jpg",
  },
];

const carrusel = document.querySelector(".grid");

let intervalo = null;
let contador = 4;

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseleave", () => {
  start();
})

for (let i = 0; i < 5; i++) {
  carrusel.innerHTML += `<a class="link" href="${contenidos[i].Detalle}">
        <img class="poster" src="${contenidos[i].Poster}" alt="${contenidos[i].Nombre}"/>
    </a>`;
}

function start() {
  intervalo = setInterval(function () {
    carrusel.innerHTML = "";
    for (let i = 0; i < 5; i++) {
      let index = (contador + i) % contenidos.length;
      carrusel.innerHTML += `<a class="link" href="${contenidos[index].Detalle}">
                                    <img class="poster" src="${contenidos[index].Poster}" alt=""/>
                                  </a>`;
    }

    contador = (contador + 1) % contenidos.length;
  }, 2000);
}

function stop() {
  clearInterval(intervalo);
  intervalo = null;
}

start();




//Capítulos por temporada
let capitulos = {
  temporada1: ["Capítulo 1", "Capítulo 2", "Capítulo 3", "Capítulo 4", "Capítulo 5", "Capítulo 6", "Capítulo 7", "Capítulo 8"],
  temporada2: ["Capítulo 9", "Capítulo 10", "Capítulo 11", "Capítulo 12", "Capítulo 13", "Capítulo 14", "Capítulo 15", "Capítulo 16", "Capítulo 17", "Capítulo 18"],
  temporada3: ["Capítulo 19", "Capítulo 20", "Capítulo 21", "Capítulo 22", "Capítulo 23", "Capítulo 24", "Capítulo 25", "Capítulo 26", "Capítulo 27", "Capítulo 28", "Capítulo 29", "Capítulo 30"]
};

document.addEventListener("DOMContentLoaded", function () {
  const temporada = document.getElementById("temporada");
  const capituloSelect = document.getElementById("capitulo");

  temporada.addEventListener("change", function () {
    const temporadaSeleccionada = this.value;
    capituloSelect.innerHTML = "";

    capitulos[temporadaSeleccionada].forEach(function (capitulo, index) {
      const option = document.createElement("option");
      option.value = `capitulo${index + 1}`;
      option.textContent = capitulo;
      capituloSelect.appendChild(option);
    });
  });
  temporada.dispatchEvent(new Event('change'));
});
