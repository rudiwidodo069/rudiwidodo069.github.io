const collections = document.querySelectorAll(".fa-heart");
const navList = document.querySelectorAll(".nav-list");
const getModal = document.querySelectorAll(".btn-buy");
const closeModal = document.querySelector(".fa-window-close");
const buy = document.querySelector(".buy");
const count = document.querySelector(".collections");
const navMobile = document.querySelector(".fa-align-justify");

const stateCount = { count: 0, navbar: false };

count.innerHTML = stateCount.count;

// nav link
navList.forEach((list) => {
    list.addEventListener("click", function () {
        let active = document.getElementsByClassName("active");
        active[0].className = active[0].className.replace("active", "");
        this.className += " active";
    });
});

// nav link mobile 
navMobile.addEventListener("click", function () {
    if (!stateCount.navbar) {
        stateCount.navbar = true;
        document.querySelector(".nav-link ul").classList.add("nav-link-mobile");
        document.querySelector(".nav-link ul").classList.remove("nav-link-mobile-close");
    } else {
        stateCount.navbar = false;
        document.querySelector(".nav-link ul").classList.remove("nav-link-mobile");
        document.querySelector(".nav-link ul").classList.add("nav-link-mobile-close");
    }
});

// add colections
collections.forEach(element => {
    element.setAttribute("value", "false");
    element.addEventListener("click", function () {
        const value = this.getAttribute("value");
        if (value === "true") {
            this.setAttribute("value", "false");
            this.style.color = "#fff";
            this.classList.remove("add-animasi");
            count.innerHTML = stateCount.count -= 1;
        } else {
            this.setAttribute("value", "true");
            this.style.color = " rgb(233, 7, 146)";
            this.classList.add("add-animasi");
            count.style.display = "block";
            count.innerHTML = stateCount.count += 1;
        }
    });
});

// button get modal
getModal.forEach(modal => {
    modal.addEventListener("click", function (e) {
        document.querySelector(".modal").style.display = "block";
        // get images
        const images = document.querySelectorAll("img");
        const image = images[this.getAttribute("value")];
        const img = image.getAttribute("src");
        // set image to modal
        document.querySelector(".modal img").setAttribute("src", img);
    });
});

// close modal
closeModal.addEventListener("click", function () {
    document.querySelector(".modal").classList.add("close-animasi");
    setTimeout(() => {
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".modal").classList.remove("close-animasi");
    }, 1800);
});

// button buy
buy.addEventListener("click", function () {
    document.querySelector(".modal-confirm").style.display = "block";
    setTimeout(() => {
        document.querySelector(".modal-confirm").style.display = "none";
    }, 1200);
});