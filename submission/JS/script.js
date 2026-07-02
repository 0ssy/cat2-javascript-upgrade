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

const artistInput = document.getElementById("artistInput");
const addArtistBtn = document.getElementById("addArtistBtn");
const artistList = document.getElementById("artistList");

addArtistBtn.addEventListener("click", function () {

    const artistName = artistInput.value.trim();

    if (artistName === "") {
        return;
    }

    const li = document.createElement("li");

    li.textContent = artistName + " ";

    const removeButton = document.createElement("button");

    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(removeButton);

    artistList.appendChild(li);

    artistInput.value = "";

});

const registrationForm = document.getElementById("registrationForm");
const formMessage = document.getElementById("formMessage");

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const artstyle = document.getElementById("artstyle").value.trim();

    if (name === "" || email === "") {
        formMessage.textContent = "Please fill in all required fields.";
        return;
    }

    formMessage.textContent = "Welcome " + name + "! Your artist profile has been created successfully.";
    registrationForm.reset();
});