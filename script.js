/* OPEN SURPRISE */

function openSurprise() {

    document.getElementById("openingScreen")
        .classList.add("hide");

    setTimeout(() => {
        document.getElementById("openingScreen")
            .style.display = "none";
    }, 1000);

    celebrate();

    const song = document.getElementById("birthdaySong");

    song.play().catch(() => {});

}


/* MUSIC */

function toggleMusic() {

    const song = document.getElementById("birthdaySong");

    if (song.paused) {

        song.play();

    } else {

        song.pause();

    }

}


/* COUNTDOWN */

/*
   Birthday date:
   25 October 2026

   जर तुझा birthday वेगळ्या date ला असेल
   तर फक्त ही date बदल.
*/

const birthdayDate =
    new Date("October 25, 2026 00:00:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const distance = birthdayDate - now;


    if (distance <= 0) {

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        celebrate();

        return;
    }


    const days =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance % (1000 * 60 * 60))
            / (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance % (1000 * 60))
            / 1000
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


/* CONFETTI */

function celebrate() {

    const canvas =
        document.getElementById("confetti");

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    const pieces = [];

    for (let i = 0; i < 180; i++) {

        pieces.push({

            x: Math.random() * canvas.width,

            y: -20,

            size: Math.random() * 8 + 4,

            speed: Math.random() * 5 + 3,

            rotation: Math.random() * 360,

            rotationSpeed:
                Math.random() * 8 - 4

        });

    }


    let frame = 0;


    function animate() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        pieces.forEach(piece => {

            piece.y += piece.speed;

            piece.rotation +=
                piece.rotationSpeed;


            ctx.save();

            ctx.translate(
                piece.x,
                piece.y
            );

            ctx.rotate(
                piece.rotation *
                Math.PI / 180
            );


            const colors = [
                "#ff3d81",
                "#ffd166",
                "#7c5cff",
                "#00e5ff",
                "#ffffff"
            ];

            ctx.fillStyle =
                colors[
                    Math.floor(
                        Math.random() *
                        colors.length
                    )
                ];


            ctx.fillRect(
                -piece.size / 2,
                -piece.size / 2,
                piece.size,
                piece.size * 1.8
            );


            ctx.restore();

        });


        frame++;


        if (frame < 300) {

            requestAnimationFrame(animate);

        } else {

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

        }

    }


    animate();
}


/* SCREEN RESIZE */

window.addEventListener(
    "resize",
    () => {

        const canvas =
            document.getElementById("confetti");

        canvas.width =
            window.innerWidth;

        canvas.height =
            window.innerHeight;

    }
);