const artworks = [
    {
        name: "Paris Nights",
        image: "images/4574037118210949.jpg"
    },
    {
        name: "Café de Lumière",
        image: "images/IL CINEMATOGRAFO.jpg"
    },
    {
        name: "Vintage Dreams",
        image: "images/art7.jpg"
    }
];

const galleryGrid = document.getElementById("galleryGrid");

artworks.forEach(function (artwork) {

    const card = document.createElement("div");
    card.className = "card";

    const image = document.createElement("img");
    image.src = artwork.image;
    image.alt = artwork.name;

    const title = document.createElement("h3");
    title.textContent = artwork.name;

    card.appendChild(image);
    card.appendChild(title);

    galleryGrid.appendChild(card);

});