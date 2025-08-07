const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksLi = document.querySelectorAll('.nav-links li');

//NAVBAR SCROLL
window.addEventListener('scroll', () => {
  if(this.scrollY >= 100){
    navbar.classList.add('scrolled')
  }else{
    navbar.classList.remove('scrolled')
  }
})

// HAMBURGER TOGGLE
hamburger.addEventListener('click', ()=>{
  navLinks.classList.toggle('active')
 hamburger.classList.toggle('active')
})

//ACTIVE CLASS
navLinksLi.forEach(li => li.addEventListener('click', ()=> {
navLinksLi.forEach(li => li.classList.remove('active'))
li.classList.add('active')

hamburger.classList.remove('active')
navLinks.classList.remove('active')
}))
//Typed Js 
 
    var typed = new Typed('#hero-titles', {
      strings: ["Let's talk GRC and Cybersecurity:",
                'Securing Digital Futures Together.'],
      
      loop: true,
      loopCount: Infinity,
      typeSpeed:20,
      backDelay:2500,
    });

    //AOS
    AOS.init();
