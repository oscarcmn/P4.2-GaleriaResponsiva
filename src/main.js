const totalImages = 8;
const galleryContainer = document.getElementById("gallery");
const modalImage = document.getElementById("modalImage");
const imageModal = new bootstrap.Modal(document.getElementById("imageModal"));

const textos = [
  "Esta imagen es una calle de una ciudad",
  "Esta imagen es una mariposa azul subida a una flor",
  "Esta imagen es un gato naranja",
  "Esta imagen son unas tazas junto unas flores",
  "Esta imagen es un monje rezando",
  "Esta imagen es un oso polar relajado",
  "Esta imagen es una casa en medio de la nada",
  "Esta imagen es un gato caminando por una calle",
];

for (let i = 1; i <= totalImages; i++) {
  const col = document.createElement("div");
  col.className = "col-xs-12 col-sm-6 col-md-6 col-xl-3 d-flex";

  const small1x = `./output-adv/${i}-small-1x..jpg`;
  const small2x = `./output-adv/${i}-small-2x..jpg`;
  const medium1x = `./output-adv/${i}-medium-1x..jpg`;
  const medium2x = `./output-adv/${i}-medium-2x..jpg`;
  const large1x = `./output-adv/${i}-large-1x..jpg`;
  const large2x = `./output-adv/${i}-large-2x..jpg`;
  const xlarge2x = `./output-adv/${i}-xlarge-2x..jpg`;

  col.innerHTML = `
        <div>
        <picture class="">
          <source srcset="${small1x}, ${small2x} 2x" media="(max-width: 320px)">
          <source srcset="${medium1x}, ${medium2x} 2x" media="(max-width: 640px)">
          <source srcset="${large1x}, ${large2x} 2x" media="(max-width: 1280px)">
          <img src="${xlarge2x}" class="img-fluid" alt="" data-bs-toggle="modal" data-bs-target="#imageModal" data-image="${xlarge2x}">
        </picture>
        <p>${textos[i - 1]}</p>
        </div>`;

  galleryContainer.appendChild(col);
}

galleryContainer.addEventListener("click", function (event) {
  if (event.target && event.target.tagName === "IMG") {
    const largeImageSrc = event.target.getAttribute("data-image");
    modalImage.src = largeImageSrc;
    imageModal.show();
  }
});
