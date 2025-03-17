const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 5, name: "Kojiro Ramen", restaurant: "Kojiro House", image: "images/kojiro.jpg", rating: 4, comment: "Amazing taste!" },
    { id: 6, name: "Naruto Ramen", restaurant: "Naruto's Kitchen", image: "images/naruto.jpg", rating: 5, comment: "Perfect balance of flavors!" },
    { id: 7, name: "Nirvana Ramen", restaurant: "Zen Ramen", image: "images/nirvana.jpg", rating: 5, comment: "Truly divine!" }
];

function displayRamens() {
    const menu = document.getElementById("ramen-menu");
    menu.innerHTML = "";
    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        menu.appendChild(img);
    });
    handleClick(ramens[0]); 
}

function handleClick(ramen) {
    document.getElementById("ramen-image").src = ramen.image;
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-rating").textContent = ramen.rating;
    document.getElementById("ramen-comment").textContent = ramen.comment;
}

function addSubmitListener() {
    document.getElementById("new-ramen-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const newRamen = {
            id: ramens.length + 1,
            name: document.getElementById("name").value,
            restaurant: document.getElementById("restaurant").value,
            image: document.getElementById("image").value,
            rating: document.getElementById("rating").value,
            comment: document.getElementById("comment").value
        };
        ramens.push(newRamen);
        displayRamens();
        this.reset();
    });
}

document.addEventListener("DOMContentLoaded", function() {
    displayRamens();
    addSubmitListener();
});
