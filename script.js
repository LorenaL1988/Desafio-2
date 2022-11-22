let nombreDeAutor1 = document.getElementById("nombreAutor1");
let nombreAutorUsario1 = document.getElementById("nombreAutorUsuario1");
nombreDeAutor1.addEventListener("click", function () {
  const nombreDeAutor = prompt("Cual es el numbre del autor?");
  nombreAutorUsario1.innerText = nombreDeAutor;
});

let nombreLibro1 = document.getElementById("nombreLibro1");
let nombreLibroUsario1 = document.getElementById("nombreLibroUsuario1");
nombreLibro1.addEventListener("click", function () {
  const nombreDelLibro = prompt("Cual es el numbre del libro?");
  nombreLibroUsario1.innerText = nombreDelLibro;
});

let libroFavorito1 = document.getElementById("libroFavorito1");
let libroFavoritoUsuario1 = document.getElementById("libroFavoritoUsuario1");
libroFavorito1.addEventListener("click", function () {
  const libroFavorito = prompt("Cual es tu libro favorito?");
  libroFavoritoUsuario1.innerText = libroFavorito;
});

let nombreDeAutor2 = document.getElementById("nombreAutor2");
let nombreAutorUsario2 = document.getElementById("nombreAutorUsuario2");
nombreDeAutor2.addEventListener("click", function () {
  const nombreDeAutor = prompt("Cual es el numbre del autor?");
  nombreAutorUsario2.innerText = nombreDeAutor;
});

let nombreLibro2 = document.getElementById("nombreLibro2");
let nombreLibroUsario2 = document.getElementById("nombreLibroUsuario2");
nombreLibro2.addEventListener("click", function () {
  const nombreDelLibro = prompt("Cual es el numbre del libro?");
  nombreLibroUsario2.innerText = nombreDelLibro;
});

let libroFavorito2 = document.getElementById("libroFavorito2");
let libroFavoritoUsuario2 = document.getElementById("libroFavoritoUsuario2");
libroFavorito2.addEventListener("click", function () {
  const libroFavorito = prompt("Cual es tu libro favorito?");
  libroFavoritoUsuario2.innerText = libroFavorito;
});

let nombreDeAutor3 = document.getElementById("nombreAutor3");
let nombreAutorUsario3 = document.getElementById("nombreAutorUsuario3");
nombreDeAutor3.addEventListener("click", function () {
  const nombreDeAutor = prompt("Cual es el numbre del autor?");
  nombreAutorUsario3.innerText = nombreDeAutor;
});

let nombreLibro3 = document.getElementById("nombreLibro3");
let nombreLibroUsario3 = document.getElementById("nombreLibroUsuario3");
nombreLibro3.addEventListener("click", function () {
  const nombreDelLibro = prompt("Cual es el numbre del libro?");
  nombreLibroUsario3.innerText = nombreDelLibro;
});

let libroFavorito3 = document.getElementById("libroFavorito3");
let libroFavoritoUsuario3 = document.getElementById("libroFavoritoUsuario3");
libroFavorito3.addEventListener("click", function () {
  const libroFavorito = prompt("Cual es tu libro favorito?");
  libroFavoritoUsuario3.innerText = libroFavorito;
});

let clearBtn = document.getElementById("btn-clear");
clearBtn.addEventListener("click", function () {
  nombreAutorUsario1.innerText = "";
  nombreLibroUsario1.innerText = "";
  libroFavoritoUsuario1.innerText = "";
  nombreAutorUsario2.innerText = "";
  nombreLibroUsario2.innerText = "";
  libroFavoritoUsuario2.innerText = "";
  nombreAutorUsario3.innerText = "";
  nombreLibroUsario3.innerText = "";
  libroFavoritoUsuario3.innerText = "";
});
