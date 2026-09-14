let currentPage = 0;
const pages = document.querySelectorAll(".page");

function showPage(number) {
    pages.forEach((page, index) => {
        page.classList.toggle("active", index === number);
    });
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}

function startBirthday() {
    currentPage = 1;
    showPage(currentPage);
    createConfetti();

    const music = document.getElementById("birthdayMusic");
    music.play().catch(() => {});
}

function restart() {
    currentPage = 0;
    showPage(currentPage);
}

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";

    const hearts = ["❤️", "💗", "💕", "💖", "🫶🏻", "🫂", "✨"];

    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (4 + Math.random() * 5) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 450);

function createConfetti() {
    const container = document.getElementById("confetti");

    for (let i = 0; i < 120; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.background = [
            "#ff6f9f",
            "#ffd166",
            "#8ecae6",
            "#cdb4db",
            "#b8f2c8"
        ][Math.floor(Math.random() * 5)];
        piece.style.animationDelay = Math.random() * 2 + "s";

        container.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 6000);
    }
}
