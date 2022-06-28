//Array immagini
const imgSrc = [
  "./img/01.jpg",
  "./img/02.jpg",
  "./img/03.jpg",
  "./img/04.jpg",
  "./img/05.jpg",
];

//Crea HTML immagini
let image = "";
for (let i = 0; i < imgSrc.length; i++) {
  image += `<img src=${imgSrc[i]}  alt = "landscape-${i + 1}"/>`;
}

//Buttons
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const gallery = document.querySelector(".gallery");
const thumbnails = document.querySelector(".thumbnails");

//Aggiunge immagini nell HTML
gallery.innerHTML = image;
thumbnails.innerHTML = image;

//Prende tutte le immagini nella gallery
const images = document.querySelectorAll(".gallery img");
const thumbnailsImages = document.querySelectorAll(".thumbnails img");

//Active index
let currentActiveIndex = 0;

//Mostra imagine
images[currentActiveIndex].classList.add("d-block");
//Seleziona anterprima
thumbnailsImages[currentActiveIndex].classList.add("selected");

//Pulsante PREV
prevBtn.addEventListener("click", function () {
  images[currentActiveIndex].classList.remove("d-block");
  thumbnailsImages[currentActiveIndex].classList.remove("selected");

  currentActiveIndex--;

  if (currentActiveIndex < 0) currentActiveIndex = images.length - 1;

  images[currentActiveIndex].classList.add("d-block");
  thumbnailsImages[currentActiveIndex].classList.add("selected");
});

//Pulsante NEXT
nextBtn.addEventListener("click", function () {
  images[currentActiveIndex].classList.remove("d-block");
  thumbnailsImages[currentActiveIndex].classList.remove("selected");

  currentActiveIndex++;

  if (currentActiveIndex === images.length) currentActiveIndex = 0;

  images[currentActiveIndex].classList.add("d-block");

  thumbnailsImages[currentActiveIndex].classList.add("selected");
});
