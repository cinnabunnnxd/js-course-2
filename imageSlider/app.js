

const slides = document.querySelectorAll(".slides img")
let slidesIndex = 0
let intervalId = null

// initializeSlider()

document.addEventListener("DOMContentLoaded", initializeSlider)

function initializeSlider() {

    if (slides.length > 0) {
        slides[slidesIndex].classList.add("displaySlide")
        intervalId = setInterval(nextSlide, 5000)
    }


}
function showSlide(index) {

    if (index >= slides.length) {
        slidesIndex = 0
    } else if (index < 0) {
        slidesIndex = slides.length - 1
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide")
    })
    slides[slidesIndex].classList.add("displaySlide")
}

function prevSlide() {
    clearInterval(intervalId)
    slidesIndex--
    showSlide(slidesIndex)
}

function nextSlide() {
    slidesIndex++
    showSlide(slidesIndex)
}