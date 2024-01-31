if (performance.navigation.type === 1) {
    window.scrollTo(0, 0);
}

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const navbar = document.getElementById("navbar");
    const upBtn = document.querySelector(".up-btn")
    const navbarLinks = document.querySelector(".navbar-links")

    if (document.body.scrollTop >= 94 || document.documentElement.scrollTop >= 94) {
        navbar.style.position = "fixed";
        navbar.style.top = "0";
    } else if(document.body.scrollTop >= 47 || document.documentElement.scrollTop >= 47){
        upBtn.classList.add("visible");
        navbarLinks.style.transform = "translateX(0)";
    }else{
        navbarLinks.style.transform = "translateX(-70px)";
        navbar.style.position = "absolute";
        navbar.style.top = "94px";
        upBtn.classList.remove("visible");
    }
}