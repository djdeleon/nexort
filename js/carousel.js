let carouselTracker = 0;
const carousels = document.getElementsByClassName('carousel')
const carouselCount = document.getElementsByClassName('carousel').length

function carousel()
{
    removeActiveElement();
    carousels[carouselTracker].classList.add('active')
}

function prevImg() {
    let selectedCarousel = carousels[carouselTracker]
    selectedCarousel.classList.remove('active')

    carouselTracker == 0
        ? carouselTracker = carouselCount -1
        : carouselTracker -= 1

    carousel()
}

function nextImg() {
    let selectedCarousel = carousels[carouselTracker]
    selectedCarousel.classList.remove('active')

    carouselTracker = carouselTracker + 1

    // resets the tracker if it goes out of bound of the array range.
    if (carouselTracker > carouselCount - 1) { 
        carouselTracker = 0;
    }

    carousel();
}

function removeActiveElement() {
    let carousels = document.getElementsByClassName('carousel')

    for (const carousel in carousels) {
        if (carousels[carousel].className?.includes('active')) {
            carousels[carousel].classList.remove('active')
        }
    }
}

carousel()
