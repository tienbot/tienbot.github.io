//ПРОЕКТ 1 КАРТОЧКИ
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

//ПРОЕКТ 2 DRAG
function DragNDrop(){
    const item = document.querySelector('.item');
    const placeholders = document.querySelectorAll('.placeholder');

    item.addEventListener('dragstart', dragstart);
    item.addEventListener('dragend', dragend);

    for (const placeholder of placeholders) {
        placeholder.addEventListener('dragover', dragover);
        placeholder.addEventListener('dragenter', dragenter);
        placeholder.addEventListener('dragleave', dragleave);
        placeholder.addEventListener('drop', dragdrop);
    }

    function dragstart(event){
        event.target.classList.add('hold')
        setTimeout(() => event.target.classList.add('hide'), 0)
    }

    function dragend(event){
        event.target.className = 'item'
    }

    function dragover(event){
        event.preventDefault()
    }
    function dragenter(event){
        event.target.classList.add('hovered')
    }
    function dragleave(event){
        event.target.classList.remove('hovered')
    }
    function dragdrop(event){
        event.target.classList.remove('hovered')
        event.target.append(item)
    }
}
DragNDrop()

//ПРОЕКТ 3 СЛАЙДЕР
function Slider(){
    const upBtn = document.querySelector('.up-button')
    const downBtn = document.querySelector('.down-button')
    const sidebar = document.querySelector('.sidebar')
    const container = document.querySelector('#slider .container')
    const mainSlide = document.querySelector('.main-slide')
    const slidesCount = mainSlide.querySelectorAll('div').length

    let activeSlideIndex = 0

    upBtn.addEventListener('click', () =>{
        changeSlide('up')
    })

    downBtn.addEventListener('click', () =>{
        changeSlide('down')
    })

    document.addEventListener('keydown', event => {
        if(event.key === 'ArrowUp'){
            changeSlide('up')
        } else if(event.key === 'ArrowDown'){
            changeSlide('down')
        }
    })

    function changeSlide(direction){
        if(direction === 'up'){
            activeSlideIndex++
            if(activeSlideIndex === slidesCount){
                activeSlideIndex = 0
            }
        } else if(direction === 'down'){
            activeSlideIndex--
            if(activeSlideIndex < 0){
                activeSlideIndex = slidesCount - 1
            }
        } else if(direction === 'right'){
            activeSlideIndex++
            if(activeSlideIndex === slidesCount){
                activeSlideIndex = 0
            }
        } else if(direction === 'left'){
            activeSlideIndex--
            if(activeSlideIndex < 0){
                activeSlideIndex = slidesCount - 1
            }
        }

        const width = container.clientWidth
        const height = container.clientHeight

        if(window.screen.width > 576){
            sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

            mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

            sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
        } else if( window.screen.width < 577){
            sidebar.style.top = 0
            sidebar.style.left = `-${(slidesCount - 1) * 100}vw`

            mainSlide.style.transform = `translateX(-${activeSlideIndex * width}px)`

            sidebar.style.transform = `translateX(${activeSlideIndex * width}px)`
        }
    }
}
Slider()

//ПРОЕКТ 4 КВАДРАТЫ
function Board(){
    const board = document.querySelector('#board')
    const colors = ['#4a0868', '#9e15d6', '#bf7405', '#fb0965', '#36a086', '#56a63e', '#1e44e5', '#026ddc']
    let SQUARES_NUMBER = null
    if(window.screen.width > 1000){
        SQUARES_NUMBER = 2244
    } else if( window.screen.width < 999){
        SQUARES_NUMBER = window.screen.width + 14
    }

    for(let i = 0; i<SQUARES_NUMBER; i++){
        const square = document.createElement('div')
        square.classList.add('square')

        square.addEventListener('mouseover', setColor)
        square.addEventListener('mouseleave', removeColor)

        board.append(square)
    }

    function setColor(event){
        const element = event.target
        const color = getRandomColor()
        element.style.background = color
        element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    }

    function removeColor(event){
        const element = event.target
        element.style.background = '#1d1d1d'
        element.style.boxShadow = `0 0 2px #000`
    }

    function getRandomColor(){
        return colors[Math.floor(Math.random() * colors.length)] 
    }
}
Board()

//ПРОЕКТ 5 ИГРА
function Game(){
    const startBtn = document.querySelector('#game5 #start')
    const screens = document.querySelectorAll('.screen')
    const timeList = document.querySelector('#time-list')
    const timeEl = document.querySelector('#time')
    const board = document.querySelector('#board-game')
    let timer = null
    let time = 0
    let score = 0

    startBtn.addEventListener('click', (event) => {
        event.preventDefault()
        screens[0].classList.add('up')
    })

    timeList.addEventListener('click', event => {
        if(event.target.classList.contains('time-btn')){
            time = parseInt(event.target.getAttribute('data-time'))
            screens[1].classList.add('up')
            startGame()
        }
    })

    board.addEventListener('click', event => {
        if(event.target.classList.contains('circle')){
            score++
            event.target.remove()
            createRandomCircle()
        }
    })

    function startGame() {
        score = 0
        timer = setInterval(decreaseTime, 1000)
        createRandomCircle()
        setTime(time)
    }

    function decreaseTime() {
        if(time === 0){
            finishGame()
        } else {
            let current = --time
            if (current < 10) {
                current = `0${current}`
            }
            setTime(current)   
        }
    }

    function setTime(value){
        timeEl.innerHTML = `00:${value}`
    }

    function finishGame(){
        clearInterval(timer)
        board.querySelectorAll('div.circle').forEach(e => e.remove())
        screens[1].classList.remove('up')
        screens[1].querySelector('h3').innerHTML = `<h3>Счет: <span class='primary'>${score}</span><h3/>`
    }

    function createRandomCircle(){
        const circle = document.createElement('div')
        let size = null
        if(window.screen.width > 576){
            size = getRandomNumber(10, 60)
        } else if( window.screen.width < 577){
            size = getRandomNumber(30, 90)
        }
        const {width, height} = board.getBoundingClientRect()
        const x = getRandomNumber(0, width - size)
        const y = getRandomNumber(0, height - size)

        circle.classList.add('circle')
        circle.style.width = `${size}px`
        circle.style.height = `${size}px`
        circle.style.top = `${y}px`
        circle.style.left = `${x}px`
        board.append(circle)
    }

    function getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }
}
Game()

function winTheGame(){
    function kill(){
        const circle = document.querySelector('.circle')

        if(circle){
            circle.click()
        }
    }
    setInterval(kill, 42)
}