const artworks = [

    {
        name: "Paris Nights",
        image: "image/art1.jpg"
    },

    {
        name: "Sunset",
        image: "image/art2.jpg"
    },

    {
        name: "Vintage Dreams",
        image: "image/art3.jpg"
    },

    
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