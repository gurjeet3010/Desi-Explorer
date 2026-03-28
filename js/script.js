function searchCity() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.querySelectorAll(".box");
    let found = false;

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();

        if (text.includes(input)) {
            card.style.display = "";
            found = true;
        } else {
            card.style.display = "none";
        }
    });

    document.getElementById("noResults").style.display = found ? "none" : "block";
}

function filterCities(category, event) {
    let cards = document.querySelectorAll(".box");
    let buttons = document.querySelectorAll(".filter-container button");

    // remove active class
    buttons.forEach(btn => btn.classList.remove("active"));

    // add active class
    event.target.classList.add("active");

    cards.forEach(card => {
        let cardCategory = card.getAttribute("data-category");

        if (category === "all" || cardCategory === category) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}