const scenes = document.querySelectorAll(".scene");

let currentScene = 0;


/* CHANGE SCENE */

function showScene(number) {

    scenes[currentScene].classList.remove("active");

    currentScene = number;

    scenes[currentScene].classList.add("active");
}


/* BEGIN STORY */

document
    .getElementById("beginBtn")
    .addEventListener("click", () => {

        showScene(1);

    });


/* CONTINUE BUTTON */

document
    .querySelector(".nextBtn")
    .addEventListener("click", () => {

        // Future scenes will be added here.

        console.log("Next scene coming soon ❤️");

    });


/* CREATE PARTICLES */

const particleContainer =
    document.querySelector(".particles");

for (let i = 0; i < 60; i++) {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDelay =
        Math.random() * 6 + "s";

    particle.style.animationDuration =
        4 + Math.random() * 6 + "s";

    particleContainer.appendChild(particle);
}
