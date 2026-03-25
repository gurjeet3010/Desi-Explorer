// Scroll to top button
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Image modal (click image to zoom)
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");

document.querySelectorAll(".img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.style.backgroundImage.slice(5, -2);
    });
});

function closeModal() {
    modal.style.display = "none";
}

function recommendPlace() {
    const mood = document.getElementById("mood").value;
    const result = document.getElementById("result");

    if (mood === "history") {
        result.innerText = "👉 Visit Amer Fort & City Palace 🏰";
    } else if (mood === "relax") {
        result.innerText = "👉 Visit Jal Mahal 🌊";
    } else if (mood === "photo") {
        result.innerText = "👉 Visit Hawa Mahal & Patrika Gate 📸";
    } else {
        result.innerText = "⚠️ Please select a mood!";
    }
}