import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
let instance;
const images = galleryItems.map((item) => {
  return `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
    </div>`;
});

galleryList.insertAdjacentHTML("beforeend", images.join(""));

galleryList.addEventListener("click", onClickGal);

const genBigImg = ({ url, description }) =>
  `<img class="gallery__image" src="${url}" width="1280" alt="${description}"/>`;

function onClickGal(e) {
  e.preventDefault();

  const url = e.target.dataset.source;
  const description = e.target.alt;

  instance = basicLightbox.create(genBigImg({ url, description }), {
    onClose: () => {
      galleryList.removeEventListener("keydown", onKDownEsc);
    },
  });

  instance.show();
  galleryList.addEventListener("keydown", onKDownEsc);
}

const onKDownEsc = (e) => {
  if (e.key === "Escape" || e.keyCode === 27) {
    instance.close();
  }
};
