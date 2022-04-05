let toggleBtn = document.querySelector('.sidebar-toggle')
let closeBtn = document.querySelector('.close-btn')
let sidebar = document.querySelector('.sidebar')

toggleBtn.addEventListener('click', function() {
/*     if(sidebar.classList.contains('show-sidebar')) {
        sidebar.classList.remove('show-sidebar')
    } else {
        sidebar.classList.add('show-sidebar')
    } */
    sidebar.classList.toggle('show-sidebar')
})

// If I can click the closeBtn, the navbar is open 
closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar')
})