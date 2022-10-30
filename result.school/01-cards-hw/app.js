function slidesPlugin(activeSlide = 0){
    const slides = document.querySelectorAll('.slide')

    slides[activeSlide].classList.add('active')

    for(const slide of slides){
        slide.addEventListener('click', () => {
            clearActiveClasses()
            slide.classList.add('active')
        })
    }

    function clearActiveClasses(){
        slides.forEach((slide)=>{
            slide.classList.remove('active')
        })
    }
}

slidesPlugin(4)

//Поменять бэкграунд
//поменять картинки
//картинки брать с unsplash
// сайт jsFiddle, зарегаться там, скопировать все с index.html, css, js
//далее нажать save, скопировать ссылку и отправить боту
//подписка на инсту
