let carouselTracker = 0;
const carousels = document.getElementsByClassName('carousel')
const carouselCount = document.getElementsByClassName('carousel').length

function carousel()
{
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

carousel()


// logic
// the data structure for this is array or the data will be stored in the array
// - this means we should be able to look up to the entire array and navigate each element.
// we have to get the collection / total count of the images
// - I think we can achieve this by giving the element that has an image the same class name
// - - for example the carousel 
// - we need the total count so we can navigate around the array.
// The carousel should have a default image.
// - this is the initialized variable. set to 0 means the first index.

// The Slider variable or Tracker
// - this variable's job is to traverse in every element next to him.
// - default value is 1. this means this variable to be able to be changed based on its left and right data.
// - if im in 1 and i clicked the left button, 2 things will happen: 
// - - its value should be change to the last number of the image element in the array.
// - - its class / selected element, the active must be removed and put it in the newly selected element.
// - - the 

