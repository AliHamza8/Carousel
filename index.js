// Selecting Buttons
let btnNext = document.querySelector(".btn-next")
let btnPrev = document.querySelector(".btn-pre")

// Selecting Images
let image1 = document.querySelector(".c1")
let image2 = document.querySelector(".c2")
let image3 = document.querySelector(".c3")


// Adding functionality to Next Button
btnNext.addEventListener("click", () => {
    if(image1.style.opacity == "1" || image1.style.opacity == "") {
        image1.style.opacity = "0"
        image2.style.opacity = "1"
        image3.style.opacity = "0"
    } else if(image2.style.opacity == "1") {
        image1.style.opacity = "0"
        image2.style.opacity = "0"
        image3.style.opacity = "1"
    } else {
        image1.style.opacity = "1"
        image2.style.opacity = "0"
        image3.style.opacity = "0"
    }
})


// Adding functionality to Previous Button
btnPrev.addEventListener("click", () => {
    if(image1.style.opacity == "1" || image1.style.opacity == "") {
        image1.style.opacity = "0"
        image2.style.opacity = "0"
        image3.style.opacity = "1"
    } else if(image2.style.opacity == "1") {
        image1.style.opacity = "1"
        image2.style.opacity = "0"
        image3.style.opacity = "0"
    } else {
        image1.style.opacity = "0"
        image2.style.opacity = "1"
        image3.style.opacity = "0"
    }
})