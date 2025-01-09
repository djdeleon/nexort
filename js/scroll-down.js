function scrollDown()
{
    // logic
    // - add a class on the second section to have height so we can set the height of the x axis (vertical scroll)

    let specs = document.querySelector('.specs')
    const screen = document.body
    // console.log(window.screenX)
    specs.style.display = 'block'
    specs.style.height = '100vh'

    window.scrollTo({ top: 0, top: specs.scrollHeight, behavior: 'smooth'})
}