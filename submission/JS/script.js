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

    card.innerHTML = `
        <img src="${artwork.image}" alt="${artwork.name}">
        <h3>${artwork.name}</h3>
    `;

    galleryGrid.appendChild(card);

});