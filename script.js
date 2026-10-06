/* =========================
   SETTINGS
========================= */

// CHANGE THIS PASSWORD
const SECRET_PASSWORD = "chanu";


/*
   CHANGE THIS DATE

   Example:
   If birthday is 25 October 2026:

   new Date("October 25, 2026 00:00:00")

   Change the date below to Chanu's actual birthday.
*/

const birthdayDate =
    new Date("October 13, 2026 00:00:00");


/* =========================
   ELEMENTS
========================= */

const intro =
    document.getElementById("intro");

const passwordScreen =
    document.getElementById("passwordScreen");

const main =
    document.getElementById("main");

const music =
    document.getElementById("music");

const musicText =
    document.getElementById("musicText");


/* =========================
   START EXPERIENCE
========================= */

function startExperience() {

    intro.classList.add("hidden");

    passwordScreen.classList.remove("hidden");

}


/* =========================
   PASSWORD
========================= */

function checkPassword() {

    const input =
        document.getElementById("passwordInput");

    const message =
        document.getElementById("passwordMessage");

    if (
        input.value.trim().toLowerCase()
        === SECRET_PASSWORD.toLowerCase()
    ) {

        passwordScreen.classList.add("hidden");

        main.classList.remove("hidden");
       window.scrollTo({
    top: 0,
    behavior: "instant"
});

        startWebsite();

setTimeout(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}, 100);

    } else {

        message.innerHTML =
            "Wrong password 😜 Try again!";

        input.value = "";

    }

}


/* ENTER KEY PASSWORD */

document
    .getElementById("passwordInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            checkPassword();
        }

    });


/* =========================
   WEBSITE START
========================= */

function startWebsite() {

    typeText();

    createParticles();

    music.play()
        .then(() => {
            musicText.innerHTML = "ON";
        })
        .catch(() => {
            musicText.innerHTML = "Music";
        });

}


/* =========================
   TYPING EFFECT
========================= */

const typingMessage =
    "Another year, another chapter, and another reason to celebrate you. ❤️";

let typingIndex = 0;

function typeText() {

    const element =
        document.getElementById("typingText");

    if (typingIndex < typingMessage.length) {

        element.innerHTML +=
            typingMessage.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeText, 45);

    }

}


/* =========================
   MUSIC
========================= */

function toggleMusic() {

    if (music.paused) {

        music.play();

        musicText.innerHTML = "ON";

    } else {

        music.pause();

        musicText.innerHTML = "OFF";

    }

}


/* =========================
   COUNTDOWN
========================= */

function updateCountdown() {

    const now =
        new Date().getTime();

    const distance =
        birthdayDate.getTime() - now;


    if (distance <= 0) {

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;

    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance %
                (1000 * 60))
            /
            1000
        );


    document.getElementById("days").innerHTML =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerHTML =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2, "0");

}

setInterval(updateCountdown, 1000);

updateCountdown();


/* =========================
   SCROLL
========================= */

function scrollToSection(id) {

    const section =
        document.getElementById(id);

    section.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   PARTICLES
========================= */

function createParticles() {

    setInterval(() => {

        const particle =
            document.createElement("div");

        particle.className = "particle";

        particle.innerHTML =
            Math.random() > 0.5
                ? "❤️"
                : "✦";

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.fontSize =
            (10 + Math.random() * 20) + "px";

        particle.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        document.body.appendChild(particle);


        setTimeout(() => {
            particle.remove();
        }, 10000);

    }, 600);

}


/* =========================
   CELEBRATION
========================= */

function celebrate() {

    const items = [
        "🎉",
        "🎊",
        "❤️",
        "💖",
        "✨",
        "🥳",
        "🎂",
        "💕"
    ];


    for (let i = 0; i < 100; i++) {

        const confetti =
            document.createElement("div");

        confetti.className =
            "confetti";

        confetti.innerHTML =
            items[
                Math.floor(
                    Math.random() *
                    items.length
                )
            ];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.animationDuration =
            (2 + Math.random() * 4) + "s";

        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";


        document.body.appendChild(confetti);


        setTimeout(() => {
            confetti.remove();
        }, 7000);

    }

    music.play().catch(() => {});

}


/* =========================
   CLICK ENTER ON PASSWORD
========================= */

document.addEventListener(
    "click",
    function(event) {

        if (
            event.target.classList.contains("memory-card")
        ) {

            event.target.classList.toggle("active");

        }

    }
);
