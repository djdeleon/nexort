function selectAngle(angle)
{
    const angles = document.getElementsByClassName('angle-gallery')
    let selectedAngle;
    let currentElement = '';

    for (var i = 0; i < angles.length; i++) {
        if (angles[i].children[0].attributes[0].value.includes(angle)) {
            selectedAngle = angles[i].cloneNode(true)
        }
    }

    // reset the active class on the carousel
    let carouselItems = document.getElementsByClassName('carousel')

    for (var i = 0; i < carouselItems.length; i++) {
        if (carouselItems[i].className.includes('active')) {
            currentElement = carouselItems[i].cloneNode(true)
        }
        carouselItems[i].classList.remove('active')
    }

    // get current element color
    const currentImgSrc = currentElement.children[0].attributes[0].value


    // get selected element color
    const selectedImgSrc = selectedAngle?.children[0].attributes[0].value


    // console.log(getColor(currentImgSrc))
    // console.log(getColor(selectedImgSrc))

    const updatedImgSrc = selectedAngle.children[0].attributes[0].value.replace(getColor(selectedImgSrc), getColor(currentImgSrc))

    selectedAngle.children[0].attributes[0].value = updatedImgSrc

    // console.log(selectedAngle)

    // set the classes
    selectedAngle.classList.remove('angle-gallery')
    selectedAngle.classList.add('carousel')
    selectedAngle.classList.add('active')
    selectedAngle.classList.add('from-angle')

    // before appending the selected angle element into the carousel-container we should remove the element that has a class of from-angle
    let carouselContainer = document.getElementsByClassName('carousel-container')
    let carouselsChildren = carouselContainer[0].children

    for (var i = 0; i < carouselsChildren.length; i++) {
        if (carouselsChildren[i].className.includes('from-angle')) {
            carouselsChildren[i].remove()
        }

    }

    carouselContainer[0].appendChild(selectedAngle)
}

function getColor(imgSrc) {
    const minRangColorStep = 6
    const minRangeColor = imgSrc.indexOf('angle/') + minRangColorStep
    const maxRangeColor = imgSrc.indexOf('.')

    return imgSrc.slice(minRangeColor, maxRangeColor)
}

// Logic for dynamic angles gallery based on the active carousel image vehicle 
// this will now involves condition
// - only the angles for the selected active carousel image should show.
// images/vehicles/cars/mercedes/colors/first angle/black-393939.png

function angleGalleryDisplay() {
    const angles = ['first angle', 'second angle', 'third angle']
    let elements = [];

    // get current vehicle
    let activeCarousel = document.getElementsByClassName('active')
    let activeImgSrc = activeCarousel[0].children[0].attributes[0].value
    const activeVehicle = activeImgSrc.slice(0, activeImgSrc.indexOf('colors'))

    let angleGallery = document.getElementsByClassName('custom-angle__gallery')
    
    angles.forEach(angle => {
        let div = document.createElement('div')
        div.setAttribute('onclick', 'selectAngle(' + '\'' + angle + '\'' + ')')
        
        let img = document.createElement('img')
        img.setAttribute('src', activeImgSrc)
        
        div.classList.add('angle-gallery')
        div.appendChild(img)
        
        angleGallery[0].appendChild(div)
    })
    

    console.log(...elements)
        
        // console.log(div)
        console.log(activeCarousel[0])


    // console.log(activeCarousel[0])
    // console.log(activeVehicle)

}

angleGalleryDisplay()
