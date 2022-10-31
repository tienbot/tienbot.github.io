//ПРОЕКТ 1
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

//ПРОЕКТ 2
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
        console.log('dragenter')
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

//ПРОЕКТ 3
function Slider(){
    const upBtn = document.querySelector('.up-button')
    const downBtn = document.querySelector('.down-button')
    const sidebar = document.querySelector('.sidebar')
    const container = document.querySelector('#slider .container')
    const mainSlide = document.querySelector('.main-slide')
    const slidesCount = mainSlide.querySelectorAll('div').length

    let activeSlideIndex = 0

    sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

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
        }

        const height = container.clientHeight

        mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

        sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
    }
}
Slider()

//ПРОЕКТ 4
function Board(){
    const board = document.querySelector('#board')
    const colors = ['#4a0868', '#9e15d6', '#bf7405', '#fb0965', '#36a086', '#56a63e', '#1e44e5', '#026ddc']
    const SQUARES_NUMBER = 2244

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

//ПРОЕКТ 5
function Game(){
    const startBtn5 = document.querySelector('#start5')
    const screens5 = document.querySelectorAll('.screen5')
    const timeList5 = document.querySelector('#time-list5')
    const timeEl5 = document.querySelector('#time5')
    const board5 = document.querySelector('#board5')
    let time5 = 0
    let score5 = 0

    startBtn5.addEventListener('click', (event) => {
        event.preventDefault()
        screens5[0].classList.add('up5')
    })

    timeList5.addEventListener('click', event => {
        if(event.target.classList.contains('time-btn5')){
            time5 = parseInt(event.target.getAttribute('data-time'))
            screens5[1].classList.add('up5')
            startGame()
        }
    })

    board5.addEventListener('click', event => {
        if(event.target.classList.contains('circle5')){
            score5++
            event.target.remove()
            createRandomCircle()
        }
    })

    function startGame() {
        setInterval(decreaseTime, 1000)
        createRandomCircle()
        setTime(time5)
    }

    function decreaseTime() {
        if(time5 === 0){
            finishGame()
        } else {
            let current = --time5
            if (current < 10) {
                current = `0${current}`
            }
            setTime(current)   
        }
    }

    function setTime(value){
        timeEl5.innerHTML = `00:${value}`
    }

    function finishGame(){
        timeEl5.parentNode.classList.add('hide5')
        board5.innerHTML = `<h1>Счет: <span class='primary5'>${score5}</span><h1/>`
    }

    function createRandomCircle(){
        const circle5 = document.createElement('div')
        const size = getRandomNumber(10, 60)
        const {width, height} = board5.getBoundingClientRect()
        const x = getRandomNumber(0, width - size)
        const y = getRandomNumber(0, height - size)

        circle5.classList.add('circle5')
        circle5.style.width = `${size}px`
        circle5.style.height = `${size}px`
        circle5.style.top = `${y}px`
        circle5.style.left = `${x}px`
        board5.append(circle5)
    }

    function getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }
}
Game()

function winTheGame(){
    function kill(){
        const circle5 = document.querySelector('.circle5')

        if(circle5){
            circle5.click()
        }
    }
    setInterval(kill, 42)
}
