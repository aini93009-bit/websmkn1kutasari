```javascript
/* =====================================================
   MOBILE NAVBAR
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


if (menuToggle) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("show");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("show")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

const navLinks = document.querySelectorAll(".nav-menu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("show");

        const icon = menuToggle.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

});


/* =====================================================
   ACTIVE NAVBAR
===================================================== */

window.addEventListener("scroll", function () {

    const sections =
        document.querySelectorAll("section[id]");

    const scrollPosition =
        window.scrollY + 150;


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");


        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(function (link) {

                link.classList.remove("active");

            });


            const activeLink =
                document.querySelector(
                    '.nav-menu a[href="#' +
                    sectionId +
                    '"]'
                );


            if (activeLink) {

                activeLink.classList.add("active");

            }

        }

    });

});


/* =====================================================
   COUNTER
===================================================== */

const counters =
    document.querySelectorAll(".counter");

let counterStarted = false;


function runCounter() {

    if (counterStarted) {
        return;
    }


    const statistics =
        document.querySelector(".statistics");


    if (!statistics) {
        return;
    }


    const position =
        statistics.getBoundingClientRect().top;


    if (position < window.innerHeight - 100) {

        counterStarted = true;


        counters.forEach(function (counter) {

            const target =
                Number(counter.dataset.target);


            /*
               Jika target = 0,
               jangan lakukan animasi.
            */

            if (target === 0) {

                counter.textContent = "—";

                return;

            }


            let current = 0;


            const increment =
                Math.ceil(target / 50);


            const timer =
                setInterval(function () {

                    current += increment;


                    if (current >= target) {

                        current = target;

                        clearInterval(timer);

                    }


                    counter.textContent =
                        current + "+";

                }, 25);

        });

    }

}


window.addEventListener(
    "scroll",
    runCounter
);


runCounter();


/* =====================================================
   BACK TO TOP
===================================================== */

const backTop =
    document.getElementById("backTop");


window.addEventListener("scroll", function () {

    if (!backTop) {
        return;
    }


    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


if (backTop) {

    backTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* =====================================================
   CURRENT YEAR
===================================================== */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}
```
