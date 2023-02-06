//active link
const sectionAll = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollY = window.pageYOffset;
    sectionAll.forEach(e=> {
        const sectionHeight = e.offsetHeight
        const sectionTop = e.offsetTop - 50;
        sectionId = e.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            let a = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
            a.classList.add('active-link');
        }else{
            let a = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
            a.classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive)

// menu humberger
const menuToggle = document.querySelector('.menu-toggle');
const navLink = document.querySelector('.navigation ul');
menuToggle.addEventListener('click',()=> {
    navLink.classList.toggle('d-none')
})
// klick di luar sidebar untuk mennghilangkan nav
document.addEventListener('click',(e)=> {
    if(!menuToggle.contains(e.target) && !navLink.contains(e.target)) {
        navLink.classList.remove('d-none')
    }
})
