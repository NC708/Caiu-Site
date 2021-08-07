document.addEventListener('DOMContentLoaded', (e) => {
    const toggleMenu = document.querySelector(".menu-toggle");
    const blanketMenuContainer = document.querySelector(".blanket-menu-container");
    const headerWrapper = document.querySelector(".header-wrapper");

    toggleMenu.addEventListener("click", () => {
        blanketMenuContainer.classList.toggle("open");
    });

    let productPhoto = document.getElementsByClassName("photo-queue-img");
    let selectedPhoto = document.querySelector(".selected");
    let activePhoto = document.getElementsByClassName("active");

    for(let i = 0; i < productPhoto.length; i++) {
            productPhoto[i].addEventListener("click", () => {
                activePhoto[0].classList.remove("active");
                productPhoto[i].classList.add("active");
                selectedPhoto.src = productPhoto[i].src;
        });
    }
    
    window.addEventListener('load', (e) => {
        console.log("Page loaded");

        let fadeFromCenter = document.getElementsByClassName("fade-from-center");
        let fadeFromLeft = document.getElementsByClassName("fade-from-left");
        let fadeFromRight = document.getElementsByClassName("fade-from-right");

        for(let i = 0; i < fadeFromCenter.length; i++) {
            fadeFromCenter[i].classList.add("enable-center-fade");
        }
        
        for(let i = 0; i < fadeFromLeft.length; i++) {
            fadeFromLeft[i].classList.add("enable-left-fade");
        }
        
        for(let i = 0; i < fadeFromRight.length; i++) {
            fadeFromRight[i].classList.add("enable-right-fade");
        }
    });
});