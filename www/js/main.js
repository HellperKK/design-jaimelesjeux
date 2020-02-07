window.addEventListener("DOMContentLoaded", function() {
    let buttonSwap = document.querySelector(".navbar-swap");
    buttonSwap.addEventListener("click", function() {
        let buttonSwap = document.querySelector(".navbar ul");
        if (buttonSwap.classList.contains("navbar-shown")) {
            buttonSwap.classList.remove("navbar-shown");
        }
        else {
            buttonSwap.classList.add("navbar-shown");
        }
    })
});