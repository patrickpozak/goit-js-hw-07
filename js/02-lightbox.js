import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const images = galleryItems.map((item) => {
  return `<li class="gallery__item">
    <a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
    </li>`;
});

galleryList.insertAdjacentHTML("beforeend", images.join(""));

galleryList.addEventListener("click", onClickGal);

function onClickGal(e) {
  e.preventDefault();
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  nav: false,
  close: false,
  scrollZoom: false,
});
