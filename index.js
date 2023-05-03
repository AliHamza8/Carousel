// Selecting Buttons
let btnNext = document.querySelector(".btn-next")
let btnPrev = document.querySelector(".btn-pre")

// Selecting Images
let image1 = document.querySelector(".c1")
let image2 = document.querySelector(".c2")
let image3 = document.querySelector(".c3")

// Adding functionality to Next Button
btnNext.addEventListener("click", () => {
    console.log("button is pressed")
    if(image1.style.opacity == "1") {
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
    console.log("button is pressed")
    if(image1.style.opacity == "1") {
        image1.style.opacity = "0"
        image2.style.opacity = "0"
        image3.style.opacity = "1"
        console.log("1 and went to 3")
    } else if(image2.style.opacity == "1") {
        image1.style.opacity = "1"
        image2.style.opacity = "0"
        image3.style.opacity = "0"
        console.log("2 and went to 1")
    } else {
        image1.style.opacity = "0"
        image2.style.opacity = "1"
        image3.style.opacity = "0"
        console.log("3 and went to 1")
    }
})