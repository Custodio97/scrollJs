function show() {
    let reveal = document.querySelectorAll('.reveal')
    
    for (let i = 1; i < reveal.length;i++){
        let windowHeight = window.innerHeight
        let elementTop = reveal[i].getBoundingClientRect().top
        let e = 190
        
        if (elementTop < windowHeight - e) {
             reveal[i].classList.add('active')
        } else {
            reveal[i].classList.remove('active')
        }
    }
}

window.addEventListener('scroll', show)