// debugger

//если главная стр, то бургер и меню белые, иначе черные
function burgerColor(){
    if(document.getElementById("mainPage")){
        document.querySelector(".navbar").classList.add("navbar-dark");
        Array.from(document.querySelector(".navbar-nav").children).forEach(el => {el.classList.add("white_list");});
    } else {
        document.querySelector(".navbar").classList.add("navbar-white");
    }
}
burgerColor();

//нажимаем бургер - появляется крестик и наоборот
document.getElementById("navBurger").onclick = function() {iconBurger()};
function iconBurger() {
    document.getElementById("navBurger").classList.add("d-none");
    document.getElementById("navClose").classList.remove("d-none");  
}
document.getElementById("navClose").onclick = function() {iconClose()};
function iconClose() {
    document.getElementById("navClose").classList.add("d-none");
    document.getElementById("navBurger").classList.remove("d-none");
}

//карточка, присваиваем класс form-check-input
document.querySelectorAll('.modal_card input').forEach(el => el.classList.add('form-check-input'));

//кликаем на карточку в модалке
let clickableCards = document.querySelectorAll(".modal_card");
clickableCards.forEach(element => {
    element.addEventListener("click",function() {
        const cardRadio = element.querySelector('.form-check-input');
        cardRadio.checked = cardRadio.checked ? false : true;
	cardRadio.checked = cardRadio.checked ? true : true;
    });
});

//Мобильное меню. Нажимаем "Об организации" - меню разворачивается. Десктоп настраивается в CSS

let screenWidth = window.screen.width
console.log(screenWidth);

// window.addEventListener('resize', () => {
//     screenWidth = window.screen.width
//     console.log(screenWidth)
// })

if (screenWidth<1101){
    console.log(screenWidth, 'insideIf')
    let submenuBtn = document.querySelectorAll(".menu-item-has-children").forEach((el) => {
        el.classList.add("dropdown"); 

        let dropdownToggle = el.querySelector("a");
            dropdownToggle.classList.add('dropdown-toggle');
        
        let subMenu = el.querySelector(".sub-menu");
            // subMenu.classList.remove('d-none');
            subMenu.classList.add('dropdown-menu', 'dropdown-menu-dark');
            subMenu.style.display = 'none';

            subMenu.querySelectorAll("a").forEach((el) => {
                el.classList.add('dropdown-item');
            })
        
        el.addEventListener('click', () => {
            let subMenu = el.querySelector(".sub-menu");
            if(subMenu.style.display == 'none'){
                subMenu.style.display = 'block';
            } else {
                subMenu.style.display = 'none';
            }
        });
    });
}

var swiper2 = new Swiper(".news_block_swiper", {
    breakpoints:{
        500:{
            slidesPerView:2
        },
        768:{
            slidesPerView:4
        },
        1200:{
            slidesPerView:5
        },
        1400:{
            slidesPerView:6
        }
    },
    slidesPerView: 'auto',
    navigation: {
        nextEl: ".swiper-button-next-news",
        prevEl: ".swiper-button-prev-news",
    },
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
});

var swiper = new Swiper(".video_block_swiper", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

var swiper1 = new Swiper(".developments_block_swiper", {
    breakpoints:{500:{slidesPerView:2},768:{slidesPerView:4},1200:{slidesPerView:5}, 1400:{slidesPerView:6}},
    slidesPerView: 'auto',
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
    keyboard: {
        enabled: true,
    }
});





//модальное окно. Смена дизайна у выбранной суммы + input Другая сумма
const radioSection = document.querySelector("#radio-section");
   let radios = Array.from(radioSection.querySelectorAll('.wpcf7-list-item > label > input'));
   let numInput = radioSection.querySelector('.radio-without-input > span > input');
   let radiosLast = radios.pop();

   function CheckRadios() {
     radios.forEach(element => {
           if(element.checked){
             element.parentElement.classList.add('checkedBtn');
           } else {
             element.parentElement.classList.remove('checkedBtn');
           };
         });
   }

   radiosLast.classList.add("d-none");
   radiosLast.parentElement.querySelector('span').classList.add("d-none");
   
   let textInputSelected = false;

   radios.forEach(element => {
     element.addEventListener('change', () => {
       if(element.checked){
         element.parentElement.classList.add('checkedBtn');
         CheckRadios();
       };
       textInputSelected = false;
       numInput.value = '';
     });
     radiosLast.checked = false;
   });

   numInput.addEventListener('input', () => {
     if (!textInputSelected) {
       textInputSelected = true;
       radios.forEach(element => {
         element.checked = false;
         element.parentElement.classList.remove('checkedBtn');
       });
       radiosLast.checked = true;
     };
     radiosLast.value = numInput.value;
   });

   CheckRadios();

var phoneField = document.getElementById('inputPhone');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = IMask(phoneField, maskOptions);

//переход на страницу оплаты
document.querySelector("#white_btnModal").querySelector('.wpcf7-form').addEventListener('submit', (e) => {
    let data = $('#wpcf7-f414-o1 form').serializeArray()
     setTimeout(function() {
       if(e.target.dataset.status == 'sent'){
           $.ajax({
               url: '/yookassa.php',
               method: 'post',
               dataType: 'html',
               data: data,
               success: function(data){
                   let d = JSON.parse(data)
                   document.location.href = d.confirmation.confirmation_url;
               }
           });
       }
     }, 1000);
   } );


   //переход на страницу оплаты с кгопки поддержать
document.querySelector("#red_btnModal").querySelector('#wpcf7-f415-o3').addEventListener('submit', (e) => {
  let data = $('#wpcf7-f415-o3 form').serializeArray()
   setTimeout(function() {
     if(e.target.dataset.status == 'sent'){
         $.ajax({
             url: '/yookassa.php',
             method: 'post',
             dataType: 'html',
             data: data,
             success: function(data){
                 let d = JSON.parse(data)
                 document.location.href = d.confirmation.confirmation_url;
             }
         });
     }
   }, 1000);
 } );