if (performance.navigation.type === 1) {
    window.scrollTo(0, 0);
}

window.onscroll = function () {
    if (window.innerWidth > 845) {
        scrollFunction();
    }
};

function scrollFunction() {
    if (window.innerWidth >= 845) {
        const navbar = document.getElementById("navbar");
        const upBtn = document.querySelector(".up-btn")
        const navbarLinks = document.querySelector(".navbar-links")

        if (document.body.scrollTop >= 94 || document.documentElement.scrollTop >= 94) {
            navbar.style.position = "fixed";
            navbar.style.top = "0";
        } else if (document.body.scrollTop >= 47 || document.documentElement.scrollTop >= 47) {
            upBtn.classList.add("visible");
        } else {
            navbar.style.position = "absolute";
            navbar.style.top = "94px";
            upBtn.classList.remove("visible");
        }
    }
}

document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        const targetOffset = targetElement.offsetTop - 70;

        window.scrollTo({
            top: targetOffset,
        });
    });
});

let isMenuOpened = false;

const btnHamburger = document.querySelector("#menuHamburger")
btnHamburger.addEventListener("click", () => {
    const navbarElement = document.querySelector("#navbar");

    if (window.innerWidth <= 845) {
        navbarElement.style.transition = "transform 0.3s ease-in-out"
        navbarElement.style.left = "-310px";
        if (!isMenuOpened) {
            debugger
            navbarElement.style.transform = "translateX(310px)";
            isMenuOpened = true;
        } else {
            navbarElement.style.transform = "translateX(0)";
            isMenuOpened = false;
        }
    } else {
        isMenuOpened = false;
        navbarElement.style.transform = "translateX(0)";
        navbarElement.style.transition = "none"
        navbarElement.style.left = "0";
    }
});


window.addEventListener("resize", toggleMenu);