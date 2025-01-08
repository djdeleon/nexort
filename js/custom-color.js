// const vehicles = {
//     cars: [
//         {
//             name: 'mercedes',
//             colors: {
//                 background: '',
//                 main: 'black',
//                 options: ['red', 'green', 'blue', 'yellow', 'orange']
//             }
//         },
//         {
//             name: 'toyota',
//             colors: {
//                 background: '',
//                 main: ''
//             }
//         }
//     ],
//     trucks: []
// }

function selectColor(selectedColor) {
    let carousels = document.getElementsByClassName('carousel')
    let currentElement = ''

    // get the current element   
    for (const vehicle in carousels) {
        if (carousels[vehicle].className?.includes('active')) {
            currentElement = carousels[vehicle]
        }
    }
    
    const imgSrc = currentElement.children[0].attributes[0].value

    let selectedVehicle = '';

    if (imgSrc.includes('cars')) {
       selectedVehicle = 'cars/mercedes' 
    } else {
        selectedVehicle = 'motorbikes/kawasaki'
    }

    let selectedImgSrc = 'images/vehicles/' + selectedVehicle + '/colors/' + getSelectedAngle(imgSrc) + '/' + selectedColor + '.png';

    // set the selected element
    currentElement.children[0].attributes[0].value = selectedImgSrc

    // set the selected color to the background colors 
    const minRange = selectedColor.indexOf('-') + 1
    const backgroundColor = '#' + selectedColor.slice(minRange)
    const hero = document.querySelector('.hero')
    hero.style.backgroundColor = backgroundColor
}

function getSelectedAngle(path) {
    const minRangeAngleStep = 7
    const maxRangeAngleStep = 5

    const minRangeAngle = path.indexOf('colors/') + minRangeAngleStep
    const maxRangeAngle = path.indexOf('angle/') + maxRangeAngleStep

    return path.slice(minRangeAngle, maxRangeAngle)
}

function removeActiveElement() {
    let carousels = document.getElementsByClassName('carousel')

    for (const carousel in carousels) {
        if (carousels[carousel].className?.includes('active')) {
            carousels[carousel].classList.remove('active')
        }
    }
}
