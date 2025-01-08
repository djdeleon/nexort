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

    // reset the color to default ()
    setCarouselDefault()

    setBackgroundColorDefault()
    
    carousel()
}

function nextImg() {
    let prevCarousel = carousels[carouselTracker]
    prevCarousel.classList.remove('active')

    carouselTracker = carouselTracker + 1

    // resets the tracker if it goes out of bound of the array range.
    if (carouselTracker > carouselCount - 1) { 
        carouselTracker = 0;
    }

    // reset the color to default ()
    setCarouselDefault()

    setBackgroundColorDefault()

    // create a function that will set the gallery for the active carousel. 
    displayVehicleGallery()

    carousel();
}

function displayVehicleGallery()
{
    // get selected carousel
    let activeCarousel = carousels[carouselTracker]

    let activeImgSrc = activeCarousel.children[0].attributes[0].value
    const activeVehicle = activeImgSrc.slice(0, activeImgSrc.indexOf('colors'))
    console.log('a', activeVehicle) 
    const angles = ['first angle', 'second angle', 'third angle']

    let angleGallery = document.getElementsByClassName('custom-angle__gallery')

    while (angleGallery[0].firstChild) {
        angleGallery[0].firstChild.remove()
    }

    console.log(angleGallery[0])

    
    angles.forEach(angle => {
        let div = document.createElement('div')
        div.setAttribute('onclick', 'selectAngle(' + '\'' + angle + '\'' + ')')
        
        let img = document.createElement('img')
        img.setAttribute('src', activeVehicle + 'colors/' + angle + '/black-393939.png')
        
        div.classList.add('angle-gallery')
        div.appendChild(img)
        
        angleGallery[0].appendChild(div)
    })
}

function removeActiveElement() {
    let carousels = document.getElementsByClassName('carousel')

    for (const carousel in carousels) {
        if (carousels[carousel].className?.includes('active')) {
            carousels[carousel].classList.remove('active')
        }
    }
}

function setCarouselDefault() {
    for (var i = 0; i < carousels.length; i++) {
        let imgSrc = carousels[i].children[0].attributes[0].value

        const defaultColorHex = '393939';
        const defaultColorName = 'black'

        imgSrc = imgSrc.replace(getColorNameInImgSrc(imgSrc), defaultColorName)
        
        imgSrc = imgSrc.replace(getColorHexInImgSrc(imgSrc), defaultColorHex)
        
        carousels[i].children[0].attributes[0].value = imgSrc
    }
}

function setBackgroundColorDefault() {
    let currentCarousel = carousels[carouselTracker] 

    let currentImgSrc = currentCarousel.children[0].attributes[0].value
    const minRange = currentImgSrc.indexOf('-') + 1
    const maxRange = currentImgSrc.indexOf('.')
    const backgroundColor = '#' + currentImgSrc.slice(minRange, maxRange)  
    const hero = document.querySelector('.hero')
    hero.style.backgroundColor = backgroundColor
}

function getColorNameInImgSrc(path)
{
    // from index of a add the steps away of '/' is 5 OR get the previous character before the color Name. This returns /.
    indexMinRangeColorCount = 5

    let minRangeColorName = path.indexOf('angle/') + indexMinRangeColorCount // returns the character before the target name (/)
    let maxRangeColorName = path.indexOf('-') // returns the character after the target name (-)

    return path.slice(minRangeColorName + 1, maxRangeColorName)
}

function getColorHexInImgSrc(path)
{
    let minRangeColorHex = path.indexOf('-')
    let maxRangeColorHex = path.indexOf('.')

    return path.slice(minRangeColorHex + 1, maxRangeColorHex)
}


carousel()
