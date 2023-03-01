window.onscroll = () => {
    toggleTopButton();
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

function toggleTopButton() {
    if (
        document.body.scrollTop > 90 ||
        document.documentElement.scrollTop > 90
    ) {
        document.getElementById("back-to-up").classList.remove("hidden");
    } else {
        document.getElementById("back-to-up").classList.add("hidden");
    }
}
const Nav = document.getElementById("navBar");
const Nav_icon = document.getElementById("nav_button_icon");
const overflowHidden = document.getElementById("bodyTag");

function showNav() {
    Nav.classList.toggle("show_nav");
    overflowHidden.classList.toggle("overflow-y-hidden");
}

function closeNav() {
    Nav.classList.remove("show_nav");
    overflowHidden.classList.remove("overflow-hidden");
}

let preLoader = document.querySelector(".preloader");
setTimeout(() => {
    preLoader.style.visibility = "hidden";
    document.body.classList.remove("overflow-hidden");
}, 300);
