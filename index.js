const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 8, comment: "Very tasty!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 9, comment: "Rich and flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg", rating: 10, comment: "Best ramen ever!" }
];

function displayRamens() {
    const menu = document.getElementById("ramen-menu");
    menu.innerHTML = ""; // Clear menu before displaying

    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        menu.appendChild(img);
    });

    // Display first ramen's details by default
    if (ramens.length > 0) {
        handleClick(ramens[0]);
    }
}

function handleClick(ramen) {
    document.getElementById("ramen-image").src = ramen.image;
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-rating").textContent = ramen.rating;
    document.getElementById("ramen-comment").textContent = ramen.comment;
}

function addSubmitListener() {
    const form = document.getElementById("new-ramen");
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const newRamen = {
            id: ramens.length + 1,
            name: form.name.value,
            restaurant: form.restaurant.value,
            image: form.image.value,
            rating: form.rating.value,
            comment: form.comment.value
        };

        ramens.push(newRamen);
        displayRamens(); // Refresh ramen menu
        form.reset(); // Clear form after submission
    });
}

function main() {
    displayRamens();
    addSubmitListener();
}

document.addEventListener("DOMContentLoaded", main);
