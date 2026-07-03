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

const artisticInput = document.getElementById("artistInput");
const addArtisBtn = document.getElementById("addArtistBtn");
const artistList = document.getElementById("artistList");
addArtistBtn.addEventListener("click", function () {
    const artistName = artistInput.value.trim();//remove extra spaces before and after text
    if (artistName === ""){
        return;//just to make sutre the function stops immediately
    }
    const li = document.createElement("li");
    li.textContent = artistName + " "; //creating the liost item<li></li>
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
        li.remove(); ///remove a specific list item when button is clicked
    });
    li.appendChild(removeButton);
    artistList.appendChild(li); //new item to appear in <ul>
    artistInput.value = "";//ready for the next artist

});

const registrationForm = document.getElementById("registrationForm");
const forMessage = document.getElementById("forMessage");
registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const artstyle = document.getElementById("artstyle").value.trim();
    if (name === "" || email === "") {
        forMessage.textContent = "Please fill in all the required fields.";
        return; // if either field is empty a message will be shown
    }
    forMessage.textContent = "Welcome " + name +  "! You have successfully registered yourself .";
    registrationForm.reset();
});

const nameInput = document.getElementById("name");
const savedName = localStorage.getItem("artistName");
if (savedName) {
    nameInput.value = savedName;
}
nameInput.addEventListener("input", function () {
    localStorage.setItem("artistName", nameInput.value);
});
const heroBanner = document.getElementById("heroBanner");
const bannerMessage = document.getElementById("bannerMessage");
heroBanner.addEventListener("click", function () {
    bannerMessage.classList.toggle("show-Message");
});//showing and hiding the element using the CSS class
//showing and hiding the element using the CSS class