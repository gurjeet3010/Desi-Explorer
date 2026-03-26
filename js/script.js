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

    // remove old highlights
    document.querySelectorAll(".place").forEach(p => {
        p.classList.remove("highlight");
    });

    let targetId = "";
    let text = "";

    if (mood === "history") {
        targetId = "amer";
        text = "🏰 Showing Amer Fort for history lovers!";
    } else if (mood === "relax") {
        targetId = "jal";
        text = "🌊 Showing Jal Mahal for relaxation!";
    } else if (mood === "photo") {
        targetId = "city";
        text = "📸 Showing City Palace for photography!";
    } else {
        result.innerText = "⚠️ Please select a mood!";
        return;
    }

    result.innerText = text;

    const target = document.getElementById(targetId);

    // highlight
    target.classList.add("highlight");

    // scroll smoothly
    target.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}