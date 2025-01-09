function scrollDown()
{
    // logic
    // - add a class on the second section to have height so we can set the height of the x axis (vertical scroll)

    let wrapper = document.querySelector('.wrapper')
    const screen = document.body
    // console.log(window.screenX)
    wrapper.style.display = 'block'
    wrapper.style.height = '100vh'

    window.scrollTo({ top: 0, top: wrapper.scrollHeight, behavior: 'smooth'})
}