function toggleSidebar(toggle)
{
    let sidebar = document.querySelector('.sm-screen__sidebar')
    sidebar.setAttribute('onclick', `toggleSidebar(${!toggle})`)

    let sidebarContent = document.querySelector('.sidebar-content')
    sidebarContent.classList.add('active')
    
    let navIcon = document.querySelector('.nav-icon')
    navIcon.classList.remove('fa-bars')
    navIcon.classList.add('fa-x')
    
    

    if (!toggle) {
        navIcon.classList.remove('fa-x')
        navIcon.classList.add('fa-bars')

        sidebarContent.classList.remove('active')
    }

    console.log(toggle)
}